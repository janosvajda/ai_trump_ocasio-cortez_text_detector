var brain = require('brain.js');

let trainedNet;


function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function createTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let neuralNet = new brain.NeuralNetwork();
	let trainingData = createTrainingData(data);
    neuralNet.train(trainingData);
    trainedNet = neuralNet.toFunction();
    console.log('Training has been finished.');
};

function execute(input) {
    let results = trainedNet(encode(input));
    let output;
    results.trump > results.OcasioCortez ? output = 'Trump' : output = 'Ocasio-Cortez';
    return output;
}

const trainingData = [
    {
        input: "I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M. Enjoy!",
        output: {trump: 1}
    }, {
        input: "Dem Memo: FBI did not disclose who the clients were - the Clinton Campaign and the DNC. Wow!",
        output: {trump: 1}
    }, {
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: {trump: 1}
    },
    {
        input: "Great being with the National Champion Clemson Tigers last night at the White House. Because of the Shutdown I served them massive amounts of Fast Food (I paid), over 1000 hamburgers etc. Within one hour, it was all gone. Great guys and big eaters!",
        output: {trump: 1}
    },
    {
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: {trump: 1}
    },
    {
        input: "Since January 1, neither CNN nor MSNBC has booked a single Angel Mom — mothers of children brutally murdered by illegal aliens — as guests on their networks, per @GOP analysis.",
        output: {trump: 1}
    },
    {
        input: "Getting ready to go on stage at the #AFBF100 in New Orleans - packed house! I will try and match the great game played yesterday by the New Orleans Saints and their incredible QB, Drew Brees. People here are very excited by the team. Going on stage now!",
        output: {trump: 1}
    },
    {
        input: "The Fake News gets crazier and more dishonest every single day. Amazing to watch as certain people covering me, and the tremendous success of this administration, have truly gone MAD! Their Fake reporting creates anger and disunity. Take two weeks off and come back rested. Chill!",
        output: {trump: 1}
    },
    {
        input: "Nancy and Cryin’ Chuck can end the Shutdown in 15 minutes. At this point it has become their, and the Democrats, fault!",
        output: {trump: 1}
    },
    {
        input: "I’ve been waiting all weekend. Democrats must get to work now. Border must be secured!",
        output: {trump: 1}
    },
    {
        input: "Border is eventually going to be militarized and defended or the United States, as we have known it, is going to cease to exist...And Americans will not go gentle into that good night. Patrick Buchanan.  The great people of our Country demand proper Border Security NOW!",
        output: {trump: 1}
    },
    {
        input: "The Trump portrait of an unsustainable Border Crisis is dead on. “In the last two years, ICE officers made 266,000 arrests of aliens with Criminal Records, including those charged or convicted of 100,000 assaults, 30,000 sex crimes & 4000 violent killings.” America’s Southern....",
        output: {trump: 1}
    },
    {
        input: "Best line in the Elizabeth Warren beer catastrophe is, to her husband, “Thank you for being here. I’m glad you’re here” It’s their house, he’s supposed to be ther",
        output: {trump: 1}
    },
    {
        input: "If Elizabeth Warren, often referred to by me as Pocahontas, did this commercial from Bighorn or Wounded Knee instead of her kitchen, with her husband dressed in full Indian garb, it would have been a smash!",
        output: {trump: 1}
    },
    {
        input: "So sorry to hear the news about Jeff Bozo being taken down by a competitor whose reporting, I understand, is far more accurate than the reporting in his lobbyist newspaper, the Amazon Washington Post. Hopefully the paper will soon be placed in better & more responsible hands!",
        output: {trump: 1}
    },
    {
        input: "Just announced that Veterans unemployment has reached an 18 year low, really good news for our Vets and their families. Will soon be an all time low! Do you think the media will report on this and all of the other great economic news?",
        output: {trump: 1}
    },
    {
        input: "Love playing hide and seek with the kids. Never thought it would be happening in Congress with",
        output: {OcasioCortez: 1}
    },
    {
        input: "He’s not in the cloak room He’s not in the Capitol He’s not in the Russel building He’s not on the floor of the Senate And 800,000 people still don’t have their paychecks - so",
        output: {OcasioCortez: 1}
    },
    {
        input: "Also: @LaurenUnderwood was presiding over the chamber. She was the “Madame Speaker” we were addressing",
        output: {OcasioCortez: 1}
    },
    {
        input: "After looking for Mitch McConnell with @KatieHill4CA, @LaurenUnderwood, @JahanaHayesCT & others to deliver our letter asking for the Senate to do their job, I returned to this loving surprise. Thank you all so much for your support. I’ll keep these up as long as they stick! ",
        output: {OcasioCortez: 1}
    },
    {
        input: "I could’ve sat there quietly as the far right tore me to shreds (they were guaranteed to do so the moment a woman like me won my primary), or I could fight back+not let them. I chose to define myself instead of allowing them to take that away from me. And that’s why they’re mad.",
        output: {OcasioCortez: 1}
    },
    {
        input: "I’m uneasy about it too. It’s stressful & scary, but it’s also out of my control, so the best thing I can do is try to focus that attention on the most urgent issues of our time: climate change, good gov, jobs, wages, justice; and highlight the contradictions you explain here.",
        output: {OcasioCortez: 1}
    },
    {
        input: "It’s a huge win. Obviously there is work to do - there are other money committees (Ways & Means, Energy & Commerce, etc). But we’ve got one down. Before we had 0.",
        output: {OcasioCortez: 1}
    },
    {
        input: "I cannot stress how important this moment is. Dems are putting members who rejected corporate campaign money on a committee overseeing Wall St. All because:  1. Everyday people donated to our campaigns, and 2. They started to pay attention + became activists in Congress",
        output: {OcasioCortez: 1}
    },
    {
        input: "All of a sudden, it became harder for legislators to slip corporate-friendly legislation through committee, because people would write articles and their constituents would find out and grow upset. As I’ve said before, it’s People vs Money. We’ve got people, they’ve got money.",
        output: {OcasioCortez: 1}
    },
    {
        input: "Fin Services is one of few exclusive committees. The jargon around here is that they are the “money committees,” not bc they oversee money,but bc one can fundraise from special interests by sitting on it and giving corporations a listening ear. Until people started paying attn.",
        output: {OcasioCortez: 1}
    },
    {
        input: "Right now the President is more interested in photo-ops than getting people their paychecks. I’m proud of my colleagues for staying strong despite his bad-faith offer after he threw a temper tantrum at @SpeakerPelosi. He should reopen government and introduce his wall then.",
        output: {OcasioCortez: 1}
    },
    {
        input: "Personally, I’m looking forward to digging into the student loan crisis, examining for-profit prisons/ICE detention, and exploring the development of public & postal banking. To start. :)",
        output: {OcasioCortez: 1}
    },
    {
        input: "My congressional live-streams stay up for 24 hours. The Instagram handle to follow is @ repocasiocortez My personal livestreams don’t get archived and that’s the magic of them :)",
        output: {OcasioCortez: 1}
    }
]

train(trainingData);


//oc
console.log(execute("Tonight, Rep. Steve King was stripped of all his committee assignments for his embrace of white supremacy."));

//tr
console.log(execute("It is becoming more and more obvious that the Radical Democrats are a Party of open borders and crime. They want nothing to do with the major Humanitarian Crisis on our Southern Border."));

//oc
console.log(execute("These LA teachers striking against  privatization + demanding smaller classrooms/more support for their students is a whole 2019 mood"));

//tr
console.log(execute("Great being with the National Champion Clemson Tigers last night at the White House. Because of the Shutdown I served them massive amounts of Fast Food (I paid), over 1000 hamburgers etc. Within one hour, it was all gone. Great guys and big eaters!"));

