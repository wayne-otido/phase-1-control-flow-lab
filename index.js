function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!'
  } 
  if(feet > 2500) {
    return 'No can do.'
  }
  if (feet >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  return city != 'NYC' ? 'No go.' : 'Ok, sounds good.'
}

function switchOnCharmFromTip(tip){
  tip; 
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}