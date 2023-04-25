import { Component } from "react";

interface IProps {
  celsius: number | string;
}

export class BoilingVerdict extends Component<IProps> {
  render() {
    console.log("-------------", Date.now());
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
}

// export const BoilingVerdict =  memo(function() {

//   return ()
// })