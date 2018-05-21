import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      niveausecu: "faible"
    };
    this.passFaible = this.passFaible.bind(this);
  }

  secuCheck(e) {
    const maregexMinus = new RegExp("[a-z]+");
    const maregexMaj = new RegExp("[A-Z]+");
    const maregexCaractSpe = new RegExp("[W]");

    if (
      maregexMinus.test(e.target.value) &&
      maregexMaj.test(e.target.value) &&
      e.target.value.length > 6 &&
      maregexCaractSpe.test(e.target.value)
    ) {
      this.setState({ niveausecu: "élevé" });
    } else if (
      maregexMinus.test(e.target.value) &&
      maregexMaj.test(e.target.value) &&
      e.target.value.length > 6
    ) {
      this.setState({ niveausecu: "moyen" });
    } else if (maregexMinus.test(e.target.value)) {
      this.setState({ niveausecu: "faible" });
    }
  }

  passFaible() {
    if (this.state.niveausecu === "faible") {
      alert("Ce mot de passe n'est pas fiable");
    } else alert("vous êtes super bien protégé");
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="text"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            onChange={this.secuCheck.bind(this)}
          />
        </FormGroup>
        <FormGroup>
          <FormText color="muted">
            niveau de sécurité du password: {this.state.niveausecu}
          </FormText>
        </FormGroup>
        <Button onClick={this.passFaible}>Submit</Button>
      </Form>
    );
  }
}

export default Password;
