// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

var lyrics = [
	
	// Lyrics to be added to their respective album sections later
    "On and on, we sing our songs and on and on, the wars wage on and on and on, we sing our songs for more",
    "The products, damage, and pursuit are endless, identity can leave you selfless",
    "In your corner, makes me wanna douse myself in gasoline",
    "Whoa-oh, whoa-oh, whoa-oh ('Turncoat')",
    "TURNCOAT! KILLER! LIAR! THIEF!"

    // Song lyrics in order by most recent album and track listing

    // 20/20 Vision
    "Carry on, carry on, carry on, tell me, which side are you on? Carry on, carry on, carry on One by one ➖❌❌➖",
    "Collision course, it's just a wreck, shock and awe, no turning back Nothing left to say or be done It went off like a bomb",
    "The same masters who made us their fucking slaves are now our saviors, I'm so sick of needing to be saved",
    "Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh, oh-oh-oh-oh Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh-oh ('Christian Nationalist')",
    "Your theocratic beliefs are a moral weapon, full of venom, armageddon",
    "Open up the windows of your boxed in art, open up the prison gates, open up your heart",
    "Never let them back you against the wall, yeah or make you feel like you're nothing, nothing at all",
    "What doesn't kill us now will lead us back from Hell",
    "Unbreakable, Unbreakable today, Unbreakable in every single way",
    "Misery loves the company, apathy is feeding the machine",
    "In a society (in a society) that abolishes all things (that abolishes all things), to abolish society (to abolish society) is the only thing",
    "When I think about you, you make me sick, you're a maniac, a liar, you're a PIECE OF SHIT!",
    "I wish I could care less, more than I can admit, there's no turning it off, there's just no way to make it quit",
    "Everything you do, you make me, make me sick",
    "Whoa-oh Whoa-oh Whoa-oh-oh-oh Whoa-oh Whoa-oh Whoa-oh-oh-oh Whoa-oh Whoa-oh Whoa-oh-oh-oh Whoa-oh Whoa-oh Whoa-oh-oh-oh ('You Make Me Sick')'",
    "No rain falls to a spoiled land Who is un-American, un-American?",
    "No peace comes from a greedy hand Who is un-American, un-American?",
    "All his life they taught him how to run Shot in the back, the jury was the gun", 
    "Life at 26 ain't what she thought it would be, now she’s waking up from an American dream",
    "Life at 36 ain't what he thought it would be now, he’s waking up from an American dream",
    "Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh ('Un-American')",
    "Are you gonna watch it fall? Or are you gonna heed the call, carried out on resistance frequencies?",

    // American Fall
    "I got that gun, got that drug, I got everything you want, got that bomb, got that blood I got everything you're not",
    "The clock tick-tick-tick-ticking down to a disaster Your insecurity is all they're gunnin' after",
    "This propaganda, so impossible to resist, where ideology replaces being honest",
    "Construct a new reality where you're not just a number, you're a name",
    "If they come for you in the night, they will come for me in the morning",
    "Maybe we can help their pain and speak the truth online But we're busy reading Playboy and the Sunday New York Times",
    "Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh Whoa-oh-oh, hey! ('Trouble Follows Me')",
    "A rebel woman, she lived a wild life, she'd rather roses on the table, than diamonds on her neck",
    "Trouble always finds its way back to me",
    "Hard work will set you free - now that's a fuckin' dream",
    "To question the society you live in, you gotta call yourself in question",
    "To question the answers you're given, you gotta call yourself in question",
    "A boss lives inside of all our heads We're gonna kill him dead, we're gonna finish what we started",
    "I'll never trust you, you're just a liar, closing the border of the fallen empire",
    "Where do you go when they don't love you anymore? Do you need another reason to feel insecure?",
    "Kept me coming back, yeah, kept me coming back for more, give me, give me, give me, give me chemicals",
    "Where do you go when they don't know you anymore? Do you need another reason you're a prisoner?",
    "Compliments of the new world order, this is the new disorder",
    "Brainwashed, radicalized, born to kill, born to die",
    "Strategize and weaponize, enemy airwaves full of lies",
    "What you fighting for when they kick you out the door?",
    "Bashing the fashion, voluntary right, asleep in the parade, you're gonna lose the fight",
    "You'd never endorse the Jim Crow days, but the malice in your voice is a god damn giveaway",
    "Just 'cause you don't know you're racist, you don't get a pass, get a pass for your ignorance",
    "You've been handed everything just to throw it away",
    "You've been passing off the blame just to spit in our face",
    "No we won't be another casualty",
    "Try to shut us down but we won't be another casualty",

    // American Spring
    "We live in a fabled world of terror, day and night, all hidden in plain sight",
    "It's a breakdown, of rationality, re-enforcement of false beliefs",
    "A poor man's prison is a rich man's greed",
    "I will wait at the Brandenburg Gate; at the Brandenburg Gate, I'll wait",
    "She was searching for salvation in the things you buy, I was finding all the reason to give up on life",
    "If you love something and give it away, it can't come back unless you're free",
    "There is no past or future I feel like I'm gonna drown",
    "Searching for a way out, but there's no escape",
    "There's no help coming because no one cares, the world just sits by, waiting for us to die…",
    "I don't ever know where I can find an answer that isn't blood lined",
    "The criminal we receive, the criminal we conceive",
    "This is the song for your enemy, this is the song for living recklessly",
    "This is the song for your dignity, this is the song for living endlessly",
    "I don't ever want to feel this way again, I don't ever want this feeling to ever end",
    "This is the song for who you want to be, this is the song for your enemy",
    "It's hard to find the words I really want to say, but there's no point in waiting for another day",
    "You gotta set yourself on fire, I see you set yourself on fire, now you're burning down, burning down",
    "Trying to understand what's with you, and all your friends and your friends' friends are trying too",
    "Away, away, I can't get away from all of the poison, from all of the pain",
    "Away, away, I can't get away from ourselves we shut off, from ourselves we can't escape",
    "Each pixel is a story of what there was before",
    "Are we afraid of you? Are we the same as you?",
    "You want the suit at the top to tell you what your life should cost? I guarantee, it's a speck of what it's worth to you",
    "S.R.I. nation, the corporation, this ain't a model that is built to last",
    "I'm gonna break, gonna break something today",
    "Without end, we rise",
    "I gave away all the things I'm supposed to save, I gave away, so I can be free of all that defines me",
    "Without end, you stole from me, my home, my heart, my family",



];

tweetIt();

setInterval (tweetIt, 8*60*60*1000)

function tweetIt() {
    var i = getRandomIndex();
    var one = lyrics [i]
        status: one
}

T.post('statuses/update', tweet, tweeted);
function tweeted (err, data, response) {
    if(err) {
        console.log("Something went wrong!");
    }
    else {
        console.log("Tweeted successfully!");
        console.log(i + ": " + one);
    }
}

function getRandomIndex() {
    return (Math.floor(Math.random() * lyrics.length))
}
