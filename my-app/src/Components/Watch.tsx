type propsInfo = {
    miliseconds: number;
   };
   type optionsInfo = {
    weekday: "long";
    hour: "numeric";
    minute: "numeric";
    second: "numeric";
   };
   function Watch(props: propsInfo): JSX.Element {
    const date: Date = new Date(props.miliseconds);
    const options: optionsInfo = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    };
    const time: string = date.toLocaleDateString("he-IL", options);
    return <span>{time}</span>;
   }
   export default Watch;
   