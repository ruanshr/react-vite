import React, { ChangeEvent, Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Faherenheit",
};

interface IProps {
  scale: "c" | "f";
  temperature: string;
  onTemperatureChange: (value: string) => void;
}

interface IStates {
  te: string;
}
export class TemperatureInput extends Component<IProps,IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = { te: "" }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    setTimeout(() => {

      this.setState({ te : "333"})
    }) 
  }
  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return (
      <fieldset>
        
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
