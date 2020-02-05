
  let sum = (a,b) => a + b;

  alert(sum(5,5));

  let question = "are you ready?";
  let ask = (confirm(question)) ? () => alert("agree") : () => alert("dont agree");
  ask();