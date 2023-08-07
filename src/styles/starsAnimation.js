// Function to generate multiple box shadows with random values
function multipleBoxShadow(n) {
  let value = `${getRandom(2000)}px ${getRandom(2000)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2000)}px ${getRandom(2000)}px #FFF`;
  }
  return value;
}

// Get a random number
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

// Generate box-shadow values
const shadowsSmall = multipleBoxShadow(700);
const shadowsMedium = multipleBoxShadow(200);
const shadowsBig = multipleBoxShadow(100);

const styleTag = document.createElement("style");
styleTag.innerHTML = `
  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    animation: animStar 40s linear infinite;
    box-shadow: ${shadowsSmall};
  }

  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    animation: animStar 90s linear infinite;
    box-shadow: ${shadowsMedium};
  }

  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    animation: animStar 140s linear infinite;
    box-shadow: ${shadowsBig};
  }

  #stars3:after {
    position: absolute
    content: " "
    top: 2000px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: ${shadowsBig};
  }
  @keyframes animStar {
    from {
      transform: translateY(0px)
      }
      to {
      transform: translateY(-2000px);
      }
    }
`;

// Append the style tag to the document head
document.head.appendChild(styleTag);
