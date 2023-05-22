import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  display: block;
  color: inherit; text-decoration: none;
}

body {
  font-family:'Pretendard', sans-serif
  color: #333;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

#root {max-width:468px; height:100vh; margin: 0 auto; border:0.5px solid #ddd; border-radius:10px; overflow: scroll; background-color:#fff; text-align:center; 

h1 {font-size:50px; width: 50%; margin: 25px auto 20px;}
p{font-size:20px; margin-top:20px;}

div button { width: 50px; height: 50px; margin: 0  0 15px 10px; border-radius: 50%; border:none; color: #000; border: 1px solid #555; font-size:30px; background-color: transparent;}

 form{margin: 10px auto;
  input{ width: 80%; height: 40px; font-size:20px; border: none; background-color: #ddd; outline:none;}
  button {border-radius:10px; transform: translate(0, 30%);}
 }

input[type="checkbox"]{
  display: inline-block;
  width: 30px;
  height: 30px;
  border:1px solid #555;
  border-radius:4px;
  position: relative;
  transform: translate(0, 20%); 
}

 span {font-size:18px; margin-left:8px}

 .todobtn {width:30px; height:30px; transform: translate(0, 30%); border-radius:10px;
        
  svg{width:28px; height:30px}
      }
}

`;

export default Globalstyle;