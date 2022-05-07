const projectName = 'random-quote-machine';

const  FootballQuotes = [
    {"quote": "Some people think football (soccer) is a matter of life and death. I do not like that attitude. I can assure them it is much more serious than that.", "author": "Bill Shankly"},
    {"quote": "Football is a simple game, 22 men chase a ball for 90 minutes and at the end, the Germans win.", "author": "Gary Lineker"},
    {"quote": "We must have had 99 percent of the game. it was the other three percent that cost us the match.", "author": "Ruud Gullit"},
    {"quote": "I learned all about life with a ball at my feet", "author": "Ronaldinho"},
    {"quote": "The more difficult the victory, the greater the happiness in winning.", "author": "Pelé"},
    {"quote": "Good soccer players need not be titans sculpted by Michelangelo. In soccer, ability is much more important than shape, and in many cases, skill is the art of turning limitations into virtues.", "author": "Eduardo Galeano"},
    {"quote": "Becoming a footballer is only the first half of the silent prayer a kid offers up to the sky or confides to his teacher in a primary school essay. The second part is the name of the team he wants to play for.", "author": "Adrea Pirlo"},
    {"quote": "The ball is round, the game lasts ninety minutes, and everything else is just theory.", "author": "Josef 'Sepp' Herberger"},
    {"quote": "When good soccer happens, I give thanks for the miracle and I don't give a damn which team or country performs it.", "author": "Eduardo Galeano"},
    {"quote": "You have to fight to reach your dream. You have to sacrifice and work hard for it.", "author": "Lionel Messi"},
    {"quote": "And one fine day the goddess of the wind kisses the foot of man, that mistreated, scorned foot, and from that kiss the soccer idol is born. He is born in a straw crib in a tin-roofed shack and he enters the world clinging to a ball.", "author": "Eduardo Galeano"},
    {"quote": "Soccer isn't the same as Bach or Buddhism. But it is often more deeply felt than religion, and just as much a part of the community's fabric, a repository of traditions.", "author": "Franklin Foer"},
    {"quote": "Everything I know about morality and the obligations of men, I owe it to football (soccer).", "author": "Albert Camus"},
    {"quote": "I don't have time for hobbies. At the end of the day, I treat my job as a hobby. It's something I love doing.", "author": "David Beckham"},
    {"quote": "When people succeed, it is because of hard work. Luck has nothing to do with success.", "author": "Diego Maradona"},
    {"quote": "Every time I went away I was deceiving my mom. I'd tell her I was going to school but I'd be out on the street playing football. I always had a ball on my feet.", "author": "Ronaldo"},
    {"quote": "The first 90 minutes are the most important.", "author": "Sir Robert William 'Bobby' Robson"},
    {"quote": "Five days shalt thou labor, as the Bible says. The seventh day is the Lord thy God's. The sixth day is for football.", "author": "John Anthony Burgess Wilson"},
    {"quote": "In his life, a man can change wives, political parties or religions but he cannot change his favorite soccer team.", "author": "Eduardo Hughes Galeano"},
    {"quote": "As a kid, you obviously dream of being a professional footballer. I would watch players like Ronaldo of Brazil and pretend to be him on the playground. But I don't think about trying to become one of the best in the world or anything like that. I just play football.", "author": "Gareth Bale"},
    {"quote": "You have to fight to reach your dream. You have to sacrifice and work hard for it.", "author": "Lionel Messi"},
    {"quote": "I don't believe skill was, or ever will be, the result of coaches. It is a result of a love affair between the child and the ball.", "author": "Roy Maurice Keane"},
    {"quote": "The secret is to believe in your dreams; in your potential that you can be like your star, keep searching, keep believing and don't lose faith in yourself.", "author": "Neymar"},
    {"quote": "In football, the worst blindness is only seeing the ball.", "author": "Nelson Falcão Rodrigues"},
    {"quote": "If you're attacking, you don't get as tired as when you're chasing.", "author": "Kyle Rote, Jr."},
    {"quote": "I just hate losing and that gives you an extra determination to work harder.", "author": "Wayne Rooney"},
    {"quote": "When you buy me you are buying a Ferrari.", "author": "Zlatan Ibrahimovic"},
    {"quote": "To say that these men paid their shillings to watch twenty-two hirelings kick a ball is merely to say that a violin is wood and catgut, and that Hamlet is so much paper and ink.", "author": "John Boynton Priestley"},
    {"quote": "I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.", "author": "Zinedine Zidane"},
    {"quote": "It is not just about the money, it is about what you achieve on the pitch.", "author": "Ronaldinho"},
    {"quote": "If TV were only an invention to broadcast soccer, it would be justified.", "author": "Roberto Fontanarrosa"},
    {"quote": "I always want more. Whether it's a goal, or winning a game, I'm never satisfied.", "author": "Lionel Messi"},
    {"quote": "I have the chance to do for a living what I like the most in life, and that's playing football. I can make people happy and enjoy myself at the same time.", "author": "Ronaldo"},
    {"quote": "It seems that soccer tournaments create those relationships: people gathered together in pubs and living rooms, a whole country suddenly caring about the same event. A World Cup is the sort of common project that otherwise barely exists in modern societies.", "author": "Simon Kuper"},
    {"quote": "Many people say I'm the best women's soccer player in the world. I don't think so. And because of that, someday I just might be.", "author": "Mia Hamm"},
    {"quote": "Years have gone by and I've finally learned to accept myself for who I am: a beggar for good soccer. I go about the world, hand outstretched, and in the stadiums I plead: 'A pretty move, for the love of God'.", "author": "Eduardo Galeano"},
    {"quote": "It is often said in soccer that a country's particular style of play bears the fingerprints of its social and political nature. Thus the Germans are unfailingly characterized as resourceful and organized, while Brazilians are said to dance with the ball to the free-form, samba rhythms of Carnival.", "author": "Jere Longman"},
    {"quote": "Something deep in my character allows me to take the hits, and get on with trying to win.", "author": "Lionel Messi"},
    {"quote": "Though the legs of a football coach are never so active on the field of play during playing time, his mind is the best or worse player on the pitch!", "author": "Ernest Agyemang Yeboah"},
    {"quote": "Before kids can play like a pro, they must enjoy playing the game like a kid.", "author": "Steve Locker"},
    {"quote": "Football is the ballet of the masses.", "author": "Dmitri Shostakovich"},
    {"quote": "Football is all about sentiment; if it weren't then we'd all support Manchester United.", "author": "Mark O'Brien"},
    {"quote": "Books are vital to learning. Half the population doesn't go to football matches but that doesn't make football any less important.", "author": "John Sutherland"},
    {"quote": "Soccer is an art more central to our culture than anything the Arts Council deigns to recognize.", "author": "Germaine Greer"},
    {"quote": "To me, soccer is so much more than a ball and two goals; it connects people from all of the corners of the world.", "author": "Unknown Author"},
    {"quote": "The ball is round, the game lasts ninety minutes, and everything else is just theory.", "author": "Josef 'Sepp' Herberger"},
    {"quote": "Life is like a game of soccer. You need goals. If there are no goals in your life then you can't win.", "author": "Unknown Author"},
    {"quote": "Soccer is not just about scoring goals. It's about winning.", "author": "Unknown Author"},
    {"quote": "Give a man a soccer ball, he plays for a moment. Teach a man to play soccer, he plays for a lifetime.", "author": "Unknown Author"},
    {"quote": "I think there are a lot of things that soccer does in the communities that transcend the soccer field.", "author": "Brandi Denise Chastain"},
    {"quote": "What I learned from directing, I learned from soccer, where it's like a coach-player relationship.", "author": "Sean Durkin"},
    {"quote": "Soccer is an art more central to our culture than anything the Arts Council deigns to recognize.", "author": "Germaine Greer"},
    {"quote": "I learned a long time ago that there is something worse than missing the goal, and that's not pulling the trigger.", "author": "Mia Hamm"},
    {"quote": "The thing about football - the important thing about football - is that it is not just about football.", "author": "Terry Pratchett"},
    {"quote": "In football everything is complicated by the presence of the opposite team.", "author": "Jean-Paul Sartre"},
    {"quote": "Soccer and basketball are the only mainstream sports that truly plug into the modern-pulse of a dot-com society. Soccer is perfectly suited for a country of the hamster-treadmill pace, the remote-control zap and the national attention deficit-two 45-minute halves, the clock never stops, no commercial interruptions, the final whistle blows in less than two hours. It is a fluid game of systemized chaos that, no matter how tightly scripted by coaches, cannot be regulated any more than information can be truly controlled on the Internet.", "author": "Jere Longman"},
    {"quote": "My father used to say, 'If you want to know the artist, look at the art'. He was usually talking about Stanley Matthews or Don Bradman when he said it.", "author": "David Peace"},
    {"quote": "The vision of a champion is someone who is bent over, drenched in sweat, at the point of exhaustion when nobody else is watching.", "author": "Mia Hamm"},
    {"quote": "I worked on my weaknesses and made them my strengths.", "author": "Sydney Leroux"},
    {"quote": "Garrincha was the one who would climb out of the training camp window because he heard from some far-off back alley call of a ball asking to be played with, music demanding to be danced to, a woman wanting to be kissed.", "author": "Eduardo Galeano"},
    {"quote": "I thought, if we could just come together as a community, even if that just meant playing soccer together, that could be the beginning of something good. Coming together as a community, as a people, creates more power than exists when individuals are fighting each other for scraps. Soccer has always brought people together. Soccer was where I would begin.", "author": "Kennedy Odede"},
    {"quote": "Substitution is a true test of strength. The real performance of a player is seen not only during playing time but also and more especially when the player is substituted.", "author": "Ernest Agyemang Yeboah"},
    {"quote": "A penalty is a cowardly way to score.", "author": "Pelé"},
    {"quote": "Back in the 1930s, when men with handlebar mustaches played football in long johns and tails, and the ball was a spherical clod of bitumen, did fans weep in the stands when their team lost? No. They limited their responses to a muttered 'blast' or a muted 'hurrah' before going home to smoke a pipe and lean on the mantelpiece.", "author": "Charlie Brooker"},
    {"quote": "Complaining about boring football is a little like complaining about the sad ending of King Lear: it misses the point somehow.", "author": "Nick Hornby"}
 ];

let currentQuote  = '';
let currentAuthor = '';

function getRandomQuote() {
    return FootballQuotes[Math.floor(Math.random() * FootballQuotes.length)];
}

function getRGBColor() {
    let r = (Math.floor(Math.random() * 255));
    let g = (Math.floor(Math.random() * 255));
    let b = (Math.floor(Math.random() * 255));
    let rI = 255 - r;
    let gI = 255 - g;
    let bI = 255 - b;
    let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    let rgbI = 'rgb(' + rI + ', ' + gI + ', ' + bI + ')';
    let colors = { "rgb" : rgb, 
                   "rgbI": rgbI}; 
    console.log('c1', colors.rgb);
    console.log('c2', colors.rgbI);
    return colors;
}

function getQuote() {
    let randomQuote = getRandomQuote();
    let rgbColor = getRGBColor();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    console.log(currentQuote, currentAuthor);

    $('#title').animate(
        {
            backgroundColor:  '#FFFFFF',
            color:  rgbColor.rgb
        },
        1000
    );

    $('#tweet-quote').attr('href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
        + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

    $('.quote-text').animate({ opacity:0 }, 500, function() {
        $(this).animate({ opacity: 1}, 500);
        $('#text').text(currentQuote);
    });
    $('.quote-author').animate({ opacity:0 }, 500, function() {
        $(this).animate({ opacity: 1}, 500);
        $('#author').text(currentAuthor);
    });
    console.log('rgbcolor',rgbColor);
    $('html body').animate(
        {
            backgroundColor: rgbColor.rgb,
            color: rgbColor.rgb
        },
        1000
    );
    $('.button').animate(
        {
            backgroundColor: rgbColor.rgb
        },
        1000
    );

}

$(document).ready(function () {
    getQuote();
  
    $('#new-quote').on('click', getQuote);
  });
