type propsInfo = {
    user:{
    name: string,
    prefix: string,
    age: number,
   };
}
function PropsComponent(props:propsInfo):JSX.Element{
     const {age,name,prefix}=props.user;
     const phrase:string= age<=18 ? "you're child" : "you're adult";
return (<p>Hello, {prefix} {name}, {age} years old-{phrase}</p>);
}
 export default PropsComponent;