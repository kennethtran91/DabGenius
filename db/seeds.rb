
User.destroy_all
drizzy = User.create!(username: "drizzy", password: "rapgod")
superman = User.create!(username: "superman", password: "rapgod")
soulja = User.create!(username: "soulja boy", password: "rapgod")
guest = User.create!(username: "guest", password: "rapgod")
u1 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u2 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u3 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u4 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u5 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u6 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u7 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u8 = User.create!(username: Faker::Name.first_name, password: "rapgod")
u9 = User.create!(username: Faker::Name.first_name, password: "rapgod")

Song.destroy_all
under_pressure = Song.create!(artist: "Logic", title: "Under Pressure", lyrics:
"[Hook:]
Work so fucking much my greatest fear is I'mma die alone
Every diamond in my chain, yeah, that's a milestone (Keep doing it, I'm loving it)
People calling me, asking me for money, man
The only thing I'mma give you motherfuckers is a dial tone

[Verse 1:]
Flashbacks of a youngin' sipping that purple Kool Aid
Skipping school with my homies and chiefing reefer for two days
Running from the law, living how I'm living, fuck 'em all
Bumping Triple Six
Hennessy in my cup, driving through the sticks
Who the bitch riding with me?
Man, the devil tryna get me
Motivated, under-educated, and hated
But finally getting cake like a happy belated
Bitch I made it, we on
Buy it, break it, roll it, light it, smoke it, inhale it
Write it, record it, mix it, master it, press it up, unveil it
Feel like I've been waiting forever, forever to inherit
This is war, I declare it
Time is money, I can't spare it
Futuristic, so simplistic
Please decipher my linguistics
Slow it down, Robitussin
I'm the king, ain't no discussion
And now we blowing up like spontaneous human combustion
My consumption is the illest
Section eight, I know you feel this
On the come up, where they run up on you for nothing at all
Brighter than eleven suns, this the first, where my funds?
EBT, that's the card
I thank God, I thank God, but it's hard, but it's hard

[Hook]

[Verse 2:]
God damn, God damn, we at it again
Me and my homies that know me blowing up like the Taliban
Yeah, my stress up, but I'm blessed up
Fuck around and get messed up
When I murder the rhyme, I'm living divine
You know that I'm one of a kind
Lemme get it right now, ho
Draped up and I'm dripped out, right now, ho
Caked up 'til I cash out and I got 'em all wondering how, so
On the down low, haters drown slow
On the down low, haters drown slow
Oh God, my God, we got it all right
Oh God, my God, we gotta get it, right?
These fuckers facades, they just a mirage, right?
I said these fuckers facades, they just a mirage, right?
Uh, tell me that they love me, know damn well that they don't give a fuck
I be on that finger flipping killing shit up in the cut
That's what's up
All these bitches out here tryna gas it up
This is everything I ever wanted, I can't pass it up
Life changed in a year, couldn't happen fast enough
'Can I do it like you do it?' That's what they be asking us
White Benz, black card, bitch better get your plastic cup
Man, this shit is hella hard, but we never acting up
Live it up, hold on to your dream, don't ever give it up
Finally had my share of success, and shit, I can't get enough
Now they know my name through the nation
Cause my single like that good shit, man, always in rotation
Now they know Logic for Logic, not through my affiliations
Stacking profit on profit, from this music I'm making
Even Jesus had haters, so when you feeling forsaken
Tell 'em jealous Judas is who this is, and man, that'll break 'em
And bitch I'm still the same
Dash of auto tune so y'all can feel the pain
Broke as fuck, back in that basement, not a dollar to my name
Chasing fame, chasing glory, 'til the day we make a story
Positive that life ain't mine, bitch you can take that shit to Maury

[Hook]",
author_id: drizzy.id, image: File.open('app/assets/images/logic-under-pressure.jpg'))

wet_dreamz = Song.create!(artist: "J. Cole", title: "Wet Dreamz", lyrics: "Cole, Cole world, yeah
Let me take y'all back, man
As I do so well

Wasn't nothin' like that
Man, it wasn't nothin' like that first time
She was in my math class
Long hair, brown skin with a fat ass
Sat beside me, used to laugh, had mad jokes
The teacher always got mad so we passed notes
It started off so innocent
She had a vibe and a nigga started diggin' it
I was a youngin, straight crushin', tryna play the shit cool
But a nigga couldn't wait to get to school
Cause when I seen 'em thighs on her
And them hips on her and them lips on her
Got me daydreaming, man, what
I'm thinkin' how she rides on it, if she sits on it, if she licks on it
Make it hard for me to stand up
As time goes by, attractions getting deep, and
Wet dreaming, thinkin' that I'm smashin', but I'm sleepin'
I want it bad, and I ain't never been obsessed before
She wrote a note that said 'You ever had sex before?'
Damn…

[Hook:]
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, nooo
I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no

I wrote back and said, 'Of course I had sex before'
Knowing I was frontin'
I said, 'I'm like a pro, baby,' knowing I was stuntin'
But if I told the truth, I knew that I'd get played out, son
Hadn't been in pussy since the day I came out one
But, she don't know that, so she done wrote back and told me
'Oh, you a pro, homie? Well, I want you to show me
My mama gone for the weekend
So Saturday, baby, we can get to freakin''
That's when my heart start racing and my body start sweatin'
Baby, you done woke my lil' man up
I'm thinking how that body look naked
When you laying on the bed
Teacher, please don't make me stand up
I wrote back like 'Yeah, baby, sound like a plan'
Still trying to play it cool, sound like the man
But I was scared to death, my nigga, my stomach turnin'
Talking shit, knowing damn well I was a virgin, fuck

[Hook:]
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, nooo
I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no

You know that feeling when you know you finna bone for the first time?
I'm hoping that she won't notice it's my first time
I'm hoping that my shit is big enough to fuck with
And most of all I'm praying, 'God, don't let me bust quick'
I'm watching pornos, trying to see just how to stroke right
Practice putting condoms on, how it go, right?
I'm in her crib, now a nigga palms sweatin'
With a pocket full of rubbers and an erection
That's when my hands start touchin'
And her face start blushin', and a nigga roll over on top
And then she get my pants unbuckled
And her hands start rubbin' on me, ooh girl, don't stop
It's time for action: pull out the condoms real smooth
Yeah, just how I practiced
But right before I put it in, she flinched and grabbed it
And said, 'I wanna get something off my mental
I can tell you're a pro, but baby, be gentle, cause...'

[Hook:]
Cause I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, nooo
I ain't never did this before, no
And I ain't never did this before, no
And I ain't never did this before, no
", author_id: superman.id, image: File.open('app/assets/images/jcole.jpg'))

panda = Song.create!(artist: "Desiigner", title: "Panda", lyrics: "[Spoken:]
This what they all been waitin' for.
I guess so.
They been waitin' for this shit for a long time, didn’t they?
I'ma give it everythin' I got.
Ayo Dougie park that X6 around the corner.
Ayy I'm just feelin' my vibe right now.
I'm feelin' myself.

Panda, panda, panda, panda, panda, panda, panda...

I got broads in Atlanta
Twisting dope, lean, and the Fanta
Credit cards and the scammers
Hitting off licks in the bando
Black X6, Phantom
White X6, look like a panda
Going out like I'm Montana
Hundred killers, hundred hammers
Black X6, Phantom
White X6, panda
Pockets swole, Danny
Selling bar, candy
Man I'm the macho like Randy
The choppa go Oscar for Grammy
Bitch nigga pull up ya panty
Hope you killers understand me

I got broads in Atlanta
Twisting dope, lean, and the Fanta
Credit cards and the scammers
Hitting off licks in the bando
Black X6, Phantom
White X6, look like a panda
Going out like I'm Montana
Hundred killers, hundred hammers
Black X6, Phantom
White X6, panda
Pockets swole, Danny
Selling bar, candy
Man I'm the macho like Randy
The choppa go Oscar for Grammy
Bitch nigga pull up ya panty
Hope you killers understand me

Panda, panda, panda, panda, panda, panda, panda, panda, panda...

I got broads in Atlanta twisting dope, lean, and shit sipping Fanta
Credit cards and the scammers
Wake up Versace shit, life Desiigner
Whole bunch of lot of shit
They be asking 'round town who be clapping shit
I be pullin' up stuff in the Phantom shit
I got plenty of stuff of Bugatti whip look how I try this shit
Black X6, Phantom
White X6, killing on camera
Pop a Perc, I can't stand up
Gorilla, they come and kill you with bananas
Four fillas, they finna pull up in the Phantom
Know niggas, they come and kill you on the camera
Big Rollie, it dancing bigger than a Pandie
Go Oscar for Grammy, bitch pull up your panty
Fill up I'm a flip it, I got bitches pull up and they get it
I got niggas that's counting for digits
Say you make you a lot of new money
Know some killers pull off and they in the Wraith
CTD, they pull off and they kill the Bape
Call up Phillip-Phillip, gon' fill the bank, niggas up in the bank
We gon' drill the bank, fuck we gon' kill the bank, get it
I got broads, yea I get it
I got car jack city
This how I live it
Did it all for a ticket
Now Flex drop bombs when he spin it
And Bobby gon' trend it
Jeff The Don doing business
Zana Ray fucking up shit and she doin' her business
I be getting to the chicken
Counting to the chicken
And all of my niggas gon' split it

Panda, panda, panda, panda, panda, panda, panda...

I got broads in Atlanta
Twisting dope, lean, and the Fanta
Credit cards and the scammers
Hitting off licks in the bando
Black X6, Phantom
White X6, looks like a panda
Going out like I'm Montana
Hundred killers, hundred hammers
Black X6, Phantom
White X6, panda
Pockets swole, Danny
Selling bar, candy
Man I'm the macho like Randy
The choppa go Oscar for Grammy
Bitch nigga pull up ya panty
Hope you killers understand me

I got broads in Atlanta
Twisting dope, lean, and the Fanta
Credit cards and the scammers
Hitting off licks in the bando
Black X6, Phantom
White X6, looks like a panda
Going out like I'm Montana
Hundred killers, hundred hammers
Black X6, Phantom
White X6, panda
Pockets swole, Danny
Selling bar, candy
Man I'm the macho like Randy
The choppa go Oscar for Grammy
Bitch nigga pull up ya panty
Hope you killers understand me

Panda, panda, panda, panda, panda, panda, panda...
", author_id: soulja.id)

finish_line = Song.create!(artist: "Chance the Rapper", title: "Finish Line",
author_id: u1.id, image: File.open('app/assets/images/coloring-book.jpg'), lyrics:
"[Bridge:]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
And we back, and we back, and we back, and we back
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
And we back, and we back, and we back

[Verse 1 - Chance The Rapper:]
They ain't teaching taxes in school
It don't even matter I was acting a fool
But who would think their raps would turn into racks?
Don't matter, matter fact, it could happen to you
Scars on my head I'm the boy who lived
The boy love playing when the boy too sick
Reclining on a prayer, I'm declining to help
I've been lying to my body can't rely on myself
Last year got addicted to xans
Suffocated my name and starting missing my chance
LA for four months end up leaving right back
I'm in love with my city bitch I sleep in my hat
I felt hog tied ever since my dog died
He lived to 84, damn, that's a long ride
I know he up there he just siting there waiting
I'll be racing up the stairs I'm a get to the gate singing

[Bridge:]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do

[Hook - T-Pain:]
All my days I prayed and prayed and now I see the finish line
Oh I'm gonna finish mine
All my days I prayed and prayed and now I see the finish line
Gonna finish mine

[Verse 2 - Chance The Rapper:]
Gimme the water, gimme the water
I need the kind from Space Jam
Get this money, get this budget, KOK to day camp
Me and my girl plan to stay to the end
Hope there never come a day where we be better as friends
We in a marathon we could build a marriage on
Arguments as parents digging deeper than a baritone
I've been getting blocked just trying to make songs with friends
Labels told me to my face that they own my friends
I got to pray I got to pray, like Hammer after '2 Legit'
I got the power I could poke Lucifer with crucifix
I cannot scrap the stupid shit
I 'Stand Up' like I'm Ludacris
I know some folks that talk so much they drive an Uber whip
Damn, queen said why we in a queen bed
I said its yours don't worry little bean head
I'm just here to catch my breath I got a world tattoo
She said cool just bring me some food

[Hook - T-Pain:]
All my days I prayed and prayed and now I see the finish line
Oh I'm gonna finish mine
All my days I prayed and prayed and now I see the finish line
I'm gonna finish mine

[Bridge:]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do


[Drown:]

[Intro:]
The water may be deeper than its ever been

[Verse 1 - Noname::]
Lord rain down on me so I can move on water
Like children at the altar, like God inside my house
I love you, I love you, you looking holy like Mama
You made a church out of feathers
So when she fly to the Father
She know the choir gon' follow and all the offering paid
She gave my name away to your holy house
She like my blessings in disguise
She like her Jesus mountain high
So he can watch her lonely child
I know my God
I know my God seen his breaks and his edges
A jacket for giving that painted his city in gold
Like everything is everything
Like all them days he prayed with me
Like emptiness was tamed in me
And all that was left was his love
And all that was left was his love
And all that was left was his lov

[Chorus:]
Never, never drown
The water may be deeper than its ever been
Never drown
The water may be deeper than its ever been
Never drown

[Verse 2 - Kirk Franklin:]
Never, never, never
Chance let me hear 'em
This thirst in my soul
There's a thirst in my soul and tell me
Where I stand I go
Where
For you
Come on
I may cry a river
I may cry a thousand tears
But you take it [?] and you wash
You wash me new
Me new
People sing
This water is deep
Yes
This water is
Yes and I need you to
Jesus rescue me
Come on, I need you to
Take me to your mountain
Hallelujah
So someday Chicago will be free
Someday we'll all be free
Be free

[Chorus:]
The water may be deeper than its ever been
Never drown
The water may be deeper than its ever been
Never drown" )

starboy = Song.create!(artist: "The Weeknd", title: "Starboy", author_id: u2.id,
image: File.open('app/assets/images/starboy.jpg'), lyrics:
"I'm tryna put you in the worst mood, ah
P1 cleaner than your church shoes, ah
Milli point 2 just to hurt you, ah
All red lamb just to tease you, ah
None of these toys on lease too, ah
Made your whole year in a week too, yah
Main bitch out of your league too, ah
Side bitch out of your league too, ah

House so empty need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face but
I love my baby
You talking money need a hearing aid
You talking bout me I don't see the shade
Switch up my style I take any lane
I switch up my cup I kill any pain

(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy
(Ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy

Every day a nigga try to test me, ah
Every day a nigga try to end me, ah
Pull off in that roadster sv, ah
Pockets over weight gettin hefty, ah
Coming for the king that's a far cry I
I come alive in the fall time I
No competition I don't really listen
I'm in the blue mulsanne bumping New Edition

House so empty need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face but
I love my baby
You talking money need a hearing aid
You talking bout me I don't see the shade
Switch up my style I take any lane
I switch up my cup I kill any pain

(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy
(Ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy

Let a nigga Brad Pitt legend of the fall
Took the year like a bandit
Bought momma a crib and a brand new wagon
Now she hit the grocery shop lookin lavish
Star trek roof in that wrath of khan
Girls get loose when they hear the song
Hundred on the dash get me close to God
We don't pray for love we just pray for cars

House so empty need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face
But I love my baby
You talking money need a hearing aid
You talking bout me I don't see the shade
Switch up my style I take any lane
I switch up my cup I kill any pain

(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy

(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
Look what you've done!
(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha)
I'm a mother fuckin' Starboy")

come = Song.create!(artist: "PARTYNEXTDOOR", title: "Come and See Me", author_id: u3.id,
image: File.open('app/assets/images/come.jpg'), lyrics:
"[Verse 1 - PARTYNEXTDOOR:]
Doesn't make sense now
Shit just got real, things are getting intense now
I hear you talking bout we a lot, oh, you speak French now?
Giving me the signs so I gotta take a hint now
I hit you up like do you wanna hang right now?
On the East Side and you know I'm with the gang right now
You say do I own a watch, do I know what time it is right now
It's after 2AM and that's asking a lot of you right now

[Chorus - PARTYNEXTDOOR:]
All she talking bout is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me
All she ever say is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me

[Verse 2 - PARTYNEXTDOOR:]
I been up for two whole days thinking what I did to keep you going
Thumbing through the voicemails that you left me telling me where I went wrong
I'll admit I'm sorry when I feel I'm truly sorry
Things change, people change, feelings change too
Never thought the circumstances woulda changed you
You said you never traded no, yeah you said that
And I believed you when they told me don't, yeah thought you meant that
But either way you're still invited and I can't even lie to you

[Chorus - PARYNEXTDOOR & Drake:]
Swear these days all you say is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me
All she hit me with is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me

[Verse 3 - Drake:]
Why you gotta start girl, why you gotta start?
I know we make time for the things that we want
I know you got another nigga tryna play the part
Just cause he got a heart don't mean he got heart
Could be standing in the field, and he still ain't in the field
If anything should change then I thought we had a deal
Lately you keep questioning what you get out the deal
Doing things to make me feel the way I make you feel
How hard is it to let you know when I'm coming home
That way you can be prepared, maybe take a couple sick days and not miss pay
I don't even know what things are looking like inside of your place and how it's decorated
This thing is getting one-sided, I can't even lie to you right now

[Chorus - Drake:]
All she talking bout is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me
All she hit me with is come and see me for once
Come and see me for once
You don't ever come to me, you don't ever come to me
")

flexicution = Song.create!(artist: "Logic", title: "Flexicution", author_id: u4.id,
image: File.open('app/assets/images/bobby.jpg'), lyrics:
"Yeah
I'm like oh God, oh, oh my God
Bitch I run the game y'all just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it for the squad
I'm like oh God, oh, oh my God
Bitch I run the game y'all just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it for the squad
I'm like

This-this-this-this-this the type of shit they said they really wanted
So I gave them this right here, now go get blunted
Check my last album y'all know I run it
Flip the script just cause I couldn't fucking stunt it
This-this-this-this-this the type of shit my life is all about
Check the Forbes list, you know I'm balling now
They say 'Logic, you too humble boy, just let it out'
Fuck 'em all then, I'm a dead it now
Like oh, I think I know, I think I know
This flow, this super flow, out of control
Like woah, this shit like woah, I think I know
Like woah, like like woah, like like

Like this that flexicution
This is what the people say they wanted from the
Young boy, from the, from the, from the God
This that flexicution
This is what the people say they wanted
From the rap God, from the, from the, from the God

I'm like oh God, oh, oh my God
Bitch I run the game ya'll just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it for the squad
I'm like oh God, oh, oh my God
Bitch I run the game ya'll just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it for the squad
I'm like

Hold on let me bring it back
Everybody know I'm bringing the facts
And they wonder why I got it like that
Cause I put everything right on the track
And you know I'm a fuck around and let it go
I been living like woah I been living you already know
And these motherfuckers wanna take up on every mistake
And I'm showing where I'm going
And I'm knowing what I'm doing
Intuition never switching
On a mission, motherfucker why is you bitching?
Why is you bitching?
Like God damn I'm like (oh God)
Hold up wait a minute they ain't ready for the hook
It's another day, another book
I feel like Indiana in Atlanta hotter than Havana
Coming with the stamina
Bitch put down your camera
And live in the moment
This shit right here everybody gon' want it
So what up with it?
Any and everybody talk about that boy changing
Y'all can just shut up with it cause I know
Ain't none of y'all getting the flow

Boy this that flexicution
This is what the people say they wanted from me
Young boy, from the, from the, from the God
This that flexicution
This is what the people say they wanted
From the rap God, from the, from the, from the God

I'm like oh God, oh, oh my God
Bitch I run the game ya'll just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it for the squad
I'm like oh God, oh, oh my God
Bitch I run the game ya'll just commentate from the side
I'm like oh God, oh, oh my God
Everything I do you know I do it

[Jess Andrea & Logic:]
I know, I know, I know, I know, I know, I know
It's been a hell of a ride up (It's been a hell of a ride up)
Hell of a ride up (It's been a hell of a ride up)
I know, I know, I know, I know, I know, I know
That I've been M.I.A, but I was tied up
Till I heard you talking shit, now I'm fired up")

one_dance = Song.create!(artist: "Drake feat. Kyla and Wizkid", title: "One Dance",
author_id: u5.id, image: File.open('app/assets/images/drake-views.jpg'), lyrics:
"[Intro - Kyla & Wizkid:]
Baby, I like your style

[Verse 1 - Drake:]
Grips on your waist
Front way, back way
You know that I don't play
Streets not safe
But I never run away
Even when I'm away
Oti, oti, there's never much love when we go OT
I pray to make it back in one piece
I pray, I pray

[Hook - Drake:]
That's why I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me
I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me

[Bridge - Kyla & Wizkid:]
Baby, I like your style

[Verse 2 - Drake:]
Strength and guidance
All that I'm wishing for my friends
Nobody makes it from my ends
I had to bust up the silence
You know you gotta stick by me
Soon as you see the text, reply me
I don't wanna spend time fighting
We've got no time

[Hook - Drake:]
And that's why I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me
I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me

[Break - Wizkid:]
Got a pretty girl and she love me long time
Wine it, wine it, very long time
Oh, yeah, she steady on grindin'
Back up, back up, back up and wine it
Back up, back up and wine it
Back up, back up, back up and wine it
Oh, yeah, she steady on grindin'
Back up, back up and wine it, girl

[Bridge - Kyla & Wizkid:]
Tell me, I need to know, where do you wanna go?
'Cause if you're down, I'll take it slow
Make you lose control
Where, where, where
Where, where, where, where
Oh, yeah, she steady on grindin'
Where, where, where
Back up, back up and wine it, girl
Where, where, where, where
'Cause if you're down
Back up, back up and
'Cause if you're down
Back up, back up and
'Cause if you're down
Back up, back up and

[Hook - Drake:]
I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me
I need a one dance
Got a Hennessy in my hand
One more time 'fore I go
Higher powers taking a hold on me")

hotline = Song.create!(artist: "Drake", title: "Hotline Bling", author_id: u6.id,
image: File.open('app/assets/images/drake-views.jpg'), lyrics:
"You used to call me on my
You used to, you used to
Yeah

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city,
You got a reputation for yourself now
Everybody knows and I feel left out
Girl you got me down, you got me stressed out
'Cause ever since I left the city,
you started wearing less and goin' out more
Glasses of champagne out on the dance floor
Hangin' with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city, you, you, you
You and me we just don't get along
You make me feel like I did you wrong
Going places where you don't belong
Ever since I left the city,
you, you got exactly what you asked for
Running out of pages in your passport
Hanging with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

These days, all I do is
Wonder if you're bendin' over backwards for someone else
Wonder if you're rollin' up a backwoods for someone else
Doing things I taught you, gettin' nasty for someone else
You don't need no one else
You don't need nobody else, no
Why you never alone
Why you always touching road
Used to always stay at home, be a good girl
You was in a zone, yeah
You should just be yourself
Right now, you're someone else

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city")

kendrick_i = Song.create!(artist: "Kendrick Lamar", title: "i", author_id: u7.id,
image: File.open('app/assets/images/kendrick-i.jpg'), lyrics:
"We got a young brother to stand for something!
We got a young brother that believe in the all of us!
Brother Kendrick Lamar! He's not a rapper, he's a writer, he's an author!
And if you read between the lines, we'll learn how to love one another! But you can't do that
Right on
I said, you can't do that - without loving yourself first

I done been through a whole lot
Trial, tribulations, but I know God
Satan wanna put me in a bow-tie
Praying that the holy water don't go dry, yeah yeah
As I look around me
So many motherfuckers wanna down me
But ain't no nigga never drown me
In front of a dirty double-mirror they found me

And I love myself
(The world is a ghetto with guns and picket signs)
I love myself
(But it can do what it want whenever it wants and I don't mind)
I love myself
(He said I gotta get up, life is more than suicide)
I love myself
(One day at the time, sun gone shine)

Everybody looking at you crazy (Crazy)
What you gone do? (What you gone do?)
Lift up your head and keep moving (Keep moving)
Or let the paranoia haunt you? (Haunt you)
Peace to fashion police, I wear my heart
On my sleeve let the runway start
You know the miserable do love company
What do you want from me and my scars?
Everybody lack confidence, everybody lack confidence
How many times our potential was anonymous?
How many times the city making me promises?
So I promise this

And I love myself
(The world is a ghetto with big guns and picket signs)
I love myself
(But it can do what it want whenever it wants and I don't mind)
I love myself
(He said I gotta get up, life is more than suicide)
I love myself
(One day at the time, sun gone shine)

They wanna say there's a war outside and a bomb in the street
And a gun in the hood and a mob of police
And a rock on the corner and a line full of fiends
And a bottle full of lean and a model on a scheme, yup
These days of frustration keep y'all on ducking rotation
I duck these gold faces, post up fee-fi-fo-fum basis
Dreams of realities peace
Blow steam in the face of the beast
The sky can fall down, the wind can cry now
The strong in me, I still smile

And I love myself
(The world is a ghetto with big guns and picket signs)
I love myself
(But it can do what it want whenever it wants and I don't mind)
I love myself
(He said I gotta get up, life is more than suicide)
I love myself
(One day at the time, sun gone shine)

Walk my barefeet (Walk my barefeet)
Down, down valley peak (Down, down valley peak)
I keep my fee-fi-fo-fum (Fee-fi-fo-fum)
I keep my heart undone (My heart undone)

And I love myself
(The world is a ghetto with big guns and picket signs)
I love myself
(But it can do what it want whenever it wants and I don't mind)
I love myself
(He said I gotta get up, life is more than suicide)
I love myself
(One day at the time, sun gone shine)

I went to war last night
With an automatic weapon, don't nobody call a medic
I'm a do it 'til I get it right
I went to war last night
I've been dealing with depression ever since an adolescent
Duckin' every other blessin', l can never see the message
I can never take the lead, I can never bob and weave
For my nigga that be letting 'em annihilate me
And the sound is moving in a meteor speed
From a 100 to a billion lay my body in the street
Keep my money in the ceiling let my mama know I'm free
Give my story to the children and the lesson they can read
And the glory to the feeling of the only unseen
Seen enough, make a motherfucker scream, 'I love myself!'

I lost my head, I must've misread what the good book said
Oh woes keep me, it's a jungle inside
Give myself again 'til the well runs dry")

nikki = Song.create!(artist: "Logic", title: "Nikki", author_id: u8.id,
image: File.open('app/assets/images/logic-under-pressure-old.jpg'), lyrics:
"I can feel you in my lungs, feel you in my veins
Bloodstream only way to make it to my brain
I tried some others but man they just not as good as you
Going crazy cause I only feel this good with you
Maybe I’m not as strong as I once was
When we’re together lately I don’t even feel a buzz
I’m addicted to this shit like it was hard drugs
Nikki baby I love you but now I gotta go
Cause in the end what happens you already know
Probably wonder where I been at I been laying low
But in my mind I’m wondering what I’m paying for
All these other bitches on my dick but I can’t fuck with that
You the only girl I need I gotta have you back
Even though you turn my lungs black
Tell me where you've been jack
Uh, I know this shorty that go by the name Mary
I used to fuck here way back when I didn't know a thing
Skipping school with all my homies on some truancy
But when I ended things with her it was just you and me
Doing me good, that’s what I thought at first
Me and you together swear to god I saw that work
Away from you though man it's just so hard to work
Uh, my heart is hard at work
We been together like ten years, goddamn took me as young man
Everyday I wonder who I am, who will I be, where will I go
What will they write upon my grave
A free man born as a king, who died as a slave
But everything he gave her was for nothing though
Oh no I can’t fade that shit I gotta let you go
You got me tripping like a flight to Vegas
All this shit you got me doing man it’s outrageous
All I know is I’m living the life I never would
Finally let you go I thought I never could
Don’t get me wrong can’t forget the times shared
Seem like everywhere I go I always know you there
Tried to run but my legs won’t
I look away but my head don’t
I love it when you’re fresh
I love it when I take your top off and we share the same breath
I hate it that I need you, Nikki
But I love it when I feed you Nikki
I hate that I bleed for you
Uh, I long and I need for you
But I love it when I taste you
Nothing can replace you
I wish I could erase you, you’re everywhere I go
But you’re everywhere I long to be
And all these other people that don’t seem to understand
I’m just a man they always ask what’s wrong with me
Man you’re everything I crave
You’re the only thing I let in that would put me in a grave
I’m a king, you’re my Coretta
But lately I been feeling like a slave for the nicotine

Slave for the
Said I’m a slave for the nicotine
Been a slave for ya
I’m a muthafuckin slave for ya
Slave for the nicotine
Nikki, Nikki slave for ya
I’m a slave for ya Nikki
I’m a muthafuckin slave for ya
")

power_trip = Song.create!(artist: "J. Cole feat. Miguel", title: "Power Trip", author_id: u9.id,
image: File.open('app/assets/images/power-trip.jpg'), lyrics:
"[Hook 1: J. Cole]
Got me up all night, all I'm singin' is love songs
She got me up all night, constant drinkin' and love songs
She got me up all night, down and out with these love songs
She got me up all night, drownin' out with these love songs
She got me up all night, all I'm singin' is love songs
She got me up all night, constant drinkin' and love songs
She got me up all night, down and out with these love songs
She got me open all night, got me open all night

[Verse 1: J. Cole]
Okay, back when I was sleepin' in my mama's crib
Even back then when I was up there in Mohammed crib
Payin' seventeen-hundred for the rent, money well spent
No heater, but a nigga made heat, may I vent?
Had a thing for you, even wrote the song dreams for you
Cause I had dreams for you, thoughts of a ring for you
Childish shit, you know childish shit
Anonymous flowers sent, you know coward shit
Now a nigga signed to Hov, took a power trip
Back home I'm grown now and this city's my throne now
The same clubs that I used to get tossed out
Life got crisscrossed, Totally Krossed Out
Cause now I'm in this bitch and I'm totally bossed out
Old chicks cryin' cause they know that they lost out
But I'm still on you, I'm still on you
My drink spilled on me, while I feel on you
I'm saying...

[Hook 2: Miguel & J. Cole]
Would you believe me if I said I'm in love?
Baby, I want you to want me
Would you believe me if I said I'm in love?
Baby, I want ya
And we are, we are, we are
Got me up all night
And we are, we are, we are
All I'm singin' is love songs
And we are, we are, we are
Got me up all night
And we are, we are, we are
She got me
And we are, we are, we are
She got me

[Verse 2: J. Cole]
Well this has gotta be the longest crush ever
If I ever get to fuck it'd be the longest bust ever
Love is a drug, like the strongest stuff ever
And, fuck it I'm on one, you feel me?
She on a power trip, she got me where she want a nigga
Wifin' in the club, man my homies gon' disown a nigga
Like, give me 20 dolla, dolla
Ass stupid, how you get to college, college
I'm in your city and I'm wonderin' if you're home now
Went and found a man, but I'm hopin' you alone now
Can't help but feelin' like I dropped the ball, cliché
I used to pop up on you at the mall each day
Now typically I kick game like Eastbay
But you got a nigga freeze-framed yellin', 'Please play!'
For Pete's sake, homie pull it together
Just fuck her one time and be through it forever
But...

[Hook 2]

[Hook 1]
")

crooked = Song.create!(artist: "J. Cole Feat. TLC", title: "Crooked Smile", author_id: u9.id,
image: File.open('app/assets/images/crooked-smile.jpg'), lyrics:
"[TLC:]
Even though I...

[Chorus 1 — TLC:]
On my way, on my way, on my way down
On my way, on my way, on my way down
You're the one that was tryna keep me way down
But like the sun, I know you know I found my way back 'round

[J. Cole:]
They tell me I should fix my grill cause I got money now
I ain't gon' sit around and front like I ain't thought about it
A perfect smile is more appealing but it's funny how
My shit is crooked look at how far I done got without it
I keep my twisted grill, just to show the kids it's real
We ain't picture perfect but we worth the picture still
I got smart, I got rich, and I got bitches still
And they all look like my eyebrows: thick as hell
Love yourself, girl, or nobody will
Though you're a woman, I don't know how you deal
With all the pressure to look impressive and go out in heels; I feel for you
Killing yourself to find a man that'll kill for you
You wake up, put makeup on, stare in the mirror
But it's clear that you can't face what's wrong; no need to fix
What God already put his paint brush on; your roommate yelling
'Why you gotta take so long?' What it's like to have a crooked smile
This crooked smile

[Chorus 1]

[J. Cole:]
To all the women with the flaws, know it's hard my darling
You wonder why you're lonely and your man's not calling
You keep falling victim cause you're insecure
And when I tell you that you're beautiful you can't be sure
Cause he don't seem to want you back and it's got you asking
So all you see is what you lacking, not what you packing
Take it from a man that loves what you got
And baby girl you're a star, don't let 'em tell you you're not
Now is it real? Eyebrows, fingernails, hair
Is it real? if it's not, girl you don't care
Cause what's real is something that the eyes can't see
That the hands can't touch, that them broads can't be, and that's you
Never let 'em see you frown
And if you need a friend to pick you up, I'll be around
And we can ride with the windows down, the music loud
I can tell you ain't laughed in a while, but I wanna see that crooked smile

[Chorus 1]

[Chorus 2 — J. Cole (TLC):]
Crooked smile, we could style on 'em (back 'round)
Crooked smile, we could style on 'em
(You're the one that was tryna keep me way down)
(But like the sun, I know you know I found my way back round...)

[J. Cole:]
We don't look nothin' like the people on the screen
You know the movie stars, picture perfect beauty queens
But we got dreams and we got the right to chase 'em
Look at the nation, that's a crooked smile braces couldn't even straighten
Seem like half the race is either on probation
Or in jail; wonder why we inhale
Cause we in hell already - I ask if my skin pale
Would I then sell like Eminem or Adele?
But one more time for the 'Ville
And fuck all of that beef shit, nigga let's make a mil'
Hey officer man, we don't want nobody getting killed
Just open up that cell, let my brother out of jail
I got money for the bail now, well now
If you asking will I tell now? Hey, hell naw - I ain't snitching cause
Man, they get them niggas stitches now
If you was around, then you wouldn't need a witness now
How you like this crooked smile?

[Chorus 1]

[Chorus 2]

[Outro — Choir:]
Ohhhhhhhhhhohoh [4x]
La-la-la, la-la-la, la-la-la-la [4x]
I'm on my way, on my way, on my way down
I'm on my way, on my way, on my way down
You're the one that was tryna keep me way down
But like the sun, all you know I found my way back 'round, baby, back 'round...
You are the one that was tryna keep me way down
But like the sun, I know you I found my way back 'round, back 'round...
You are the one that was tryna keep me way down
But like the sun, I know you know I found my way back 'round")

Annotation.destroy_all

anno1 =  Annotation.create!(song_id: panda.id, author_id: superman.id,
start_index: 228, end_index: 278, body: 'wow this song is really stupid')

anno2 = Annotation.create!(song_id: under_pressure.id, author_id: u1.id,
start_index: 241, end_index: 250, body: "hey pick up the phone!!")

anno3 = Annotation.create!(song_id: under_pressure.id, author_id: u2.id,
start_index: 308, end_index: 316, body: "OOOOOH YEAAAAA")

anno4 = Annotation.create!(song_id: come.id, author_id: u4.id,
start_index: 262, end_index: 271, body: "EAST COAST BEAST COAST")

anno5 = Annotation.create!(song_id: panda.id, author_id: u4.id,
start_index: 400, end_index: 489, body: "why is this song so repetitive!??!?!")

anno6 = Annotation.create!(song_id: power_trip.id, author_id: u5.id,
start_index: 590, end_index: 627, body: "OH MY GRACIOUS!!")

anno7 = Annotation.create!(song_id: hotline.id, author_id: u6.id,
start_index: 94, end_index: 126, body: "Drake's got worse moves than my grandpa!!")

Comment.destroy_all

Comment.create!(author_id: superman.id, annotation_id: anno6.id,
body: "easy money baby")

Comment.create!(author_id: soulja.id, annotation_id: anno5.id,
body: "some people just can't appreciate genius")

Comment.create!(author_id: drizzy.id, annotation_id: anno4.id,
body: "word, NYC app academy > SF CRAP academy")

Comment.create!(author_id: drizzy.id, annotation_id: anno7.id,
body: "Say that to my FACE")
