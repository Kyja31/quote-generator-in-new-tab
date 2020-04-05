var quotes = [
  "We are making the world a better place!",
  "We found the perfect solution!",
  "We're passionate about innovation & technology and how they improve our daily lives.",
  "We are making the world a better place.",
  "Start before you're ready!",
  "We're the leaders in the *replace by a tiny niche market* industry.",
  "We are a fantastic disruptive tech company tackling AI, blockchain & VR.",
  "We use machine learning to tailor a personalized experience.",
  "My name is *replace by your first name*, and I am the CEO of *say anything*.",
  "We are truly SoMoLo.",
  "We only hire the best, smartest people in the world!",
  "If you are not embarrassed by the first version of your product, you've launched too late.",
  "We've been working on this technology for months.",
  "We're working with some of the best VC in the place.",
  "We're very excited to announce that *invent anything*.",
  "Our market is huge and we can scale very fast.",
  "We revolutionize the way you *replace by any verb*.",
  "Today we are introducing a game changer.",
  "Our solution is a completely new way for *replace by any verb*.",
  "We're bringing a new feature to the world.",
  "Our mission is to make every single customer experience unique.",
  "Find a parade and step in front of it.",
  "Don't ask for permission, ask for forgiveness.",
  "Don't ever give up on your dream no matter what anybody says!",
  "This is a revolution.",
  "Disruption is the new normal.",
  "Scaling is our priority now.",
  "We have many commitments and are closing the round the next days.",
  "Our CLV is [x] times higher than our CAC.",
  "Fake it until you make it.",
  "Practice makes perfect.",
  "Our goal is to build an app thas is going viral.",
  "Everyday is a Big Data day.",
  "Linking the future's ideas to today's reality.",
  "If life meaning is not a work option then quit.",
  "We are a group of talented people who get shit done!",
  "Work hard, sell harder."
];

// The main quote picker code
function getQuote() {
  return quotes[Math.floor(Math.random()*quotes.length)];
}

window.addEventListener('load', function() {
  document.getElementById("quote").innerText = getQuote();
});
