
export function ago(day){
  // debugger
  let today = new Date();
  let past = new Date(day)

  let dif = today - past;
  return (dif / (1000 * 60 * 60 * 24)).toFixed();
}
