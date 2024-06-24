function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(76)`;
    return (
        <svg style={{height:0}}>
        <defs>
            <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor="#F6DEC6" />
            <stop offset="33.33%" stopColor="#E872D4" />
            <stop offset="66.66%" stopColor="#C190D9" />
            <stop offset="100%" stopColor="#A2DCFE" />
            </linearGradient>
        </defs>
        </svg>
    );
  }
  
  export default GradientSVG;