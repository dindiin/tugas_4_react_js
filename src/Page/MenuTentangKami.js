import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tentang : "Warung Nusantara Adalah restoran yang bernuansa makanan nusantara, kami ada untuk membuat anda menikmati makanan khas dari Nusantara"
    };
  }
  render () {
    return (
      <div>
        <center>
          <p>Tentang Kami</p> {this.state.tentang}
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
