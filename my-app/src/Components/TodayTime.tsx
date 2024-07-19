 function TodayTime():JSX.Element{
    const today:string = new Date().toString();
    return (
        <div>{today}</div>
        );       
}
export default TodayTime;