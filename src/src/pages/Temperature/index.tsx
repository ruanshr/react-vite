import React, { Component } from "react";

import { TemperatureInput } from "./TemperatureInput";
import { BoilingVerdict } from "./BoilingVerdict";
import { Bar } from "./Bar";

interface ICalcuaterProps {}
interface ICalcuaterState {
  test: string;
  temperature: string;
  scale: "f" | "c";
}

function toCelsius(temperature: string) {
  let fahrenheit = parseFloat(temperature) || 0;
  fahrenheit = ((fahrenheit - 32) * 5) / 9;
  return fahrenheit.toFixed(3);
}

function toFahrenheit(temperature: string) {
  if (!temperature) {
    return temperature;
  }
  let celsius = parseFloat(temperature) || 0;
  celsius = (celsius * 9) / 5 + 32;
  return celsius.toFixed(3);
}
class Calcuater extends Component<ICalcuaterProps, ICalcuaterState> {
  myRef: any;
  constructor(props: ICalcuaterProps) {
    super(props);
    this.state = { temperature: "37", scale: "c", test: "" };
    this.myRef = React.createRef();
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(value: string) {
    this.setState({ temperature: value, scale: "c" });
  }
  handleFahrenheitChange(value: string) {
    this.setState({ temperature: value, scale: "f" });
  }
  componentDidMount(...args: []) {
    console.log("start");
    console.log(this.myRef.current);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate(...args: []) {
    console.log("componentDidUpdate", args);
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === "f" ? toCelsius(temperature) : temperature;
    const fahrenheit = scale === "c" ? toFahrenheit(temperature) : temperature;

    return (
      <>
        <Bar celsius={celsius}/>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        ></TemperatureInput>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} ref={this.myRef} />
      </>
    );
  }
}

export default Calcuater;
