# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
drizzy = User.create!(username: "drizzy", password: "rapgod")
superman = User.create!(username: "superman", password: "rapgod")
soulja = User.create!(username: "soulja boy", password: "rapgod")

Song.destroy_all
Song.create!(artist: "Logic", title: "Under Pressure", lyrics:
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

Song.create!(artist: "J. Cole", title: "Wet Dreamz", lyrics: "Cole, Cole world, yeah
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

Song.create!(artist: "Desiigner", title: "Panda", lyrics: "[Spoken:]
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
