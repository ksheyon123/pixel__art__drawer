import React, { useEffect } from "react";
import styled from "styled-components";

const ColorPicker: React.FC = () => {


  const handleMixColor = () => {
    let r = 0;
    let g = 0;
    let b = 0;
    let newArr: any[] = [];
    for (let i = 0; i <= 255; i++) {
      for (let j = 0; j <= 255; j++) {
        for (let k = 0; k <= 255; k++) {
          b++;
          newArr.push(r, g, b);
        }
        g++;
      }
      r++;
    }
    console.log(newArr);
  }

  useEffect(() => {
    handleMixColor();
  }, []);

  return (
    <StyledView>

    </StyledView>
  )
}

const StyledView = styled.div`

`;

export { ColorPicker };