// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

export interface VerseChirho {
	verse: number;
	text: string;
}

export interface ChapterChirho {
	chapter: number;
	verses: VerseChirho[];
}

export interface BookChirho {
	name: string;
	abbrev: string;
	chapters: ChapterChirho[];
}

export interface BibleDataChirho {
	version: string;
	versionName: string;
	books: BookChirho[];
}

// KJV Bible Data - Public Domain
// Starting with key chapters, will expand over time
export const bibleKjvChirho: BibleDataChirho = {
	version: 'kjv',
	versionName: 'King James Version',
	books: [
		{
			name: 'Genesis',
			abbrev: 'Gen',
			chapters: [
				{
					chapter: 1,
					verses: [
						{ verse: 1, text: 'In the beginning God created the heaven and the earth.' },
						{ verse: 2, text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.' },
						{ verse: 3, text: 'And God said, Let there be light: and there was light.' },
						{ verse: 4, text: 'And God saw the light, that it was good: and God divided the light from the darkness.' },
						{ verse: 5, text: 'And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.' },
						{ verse: 6, text: 'And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.' },
						{ verse: 7, text: 'And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.' },
						{ verse: 8, text: 'And God called the firmament Heaven. And the evening and the morning were the second day.' },
						{ verse: 9, text: 'And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.' },
						{ verse: 10, text: 'And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.' },
						{ verse: 11, text: 'And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.' },
						{ verse: 12, text: 'And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.' },
						{ verse: 13, text: 'And the evening and the morning were the third day.' },
						{ verse: 14, text: 'And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:' },
						{ verse: 15, text: 'And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.' },
						{ verse: 16, text: 'And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.' },
						{ verse: 17, text: 'And God set them in the firmament of the heaven to give light upon the earth,' },
						{ verse: 18, text: 'And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.' },
						{ verse: 19, text: 'And the evening and the morning were the fourth day.' },
						{ verse: 20, text: 'And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.' },
						{ verse: 21, text: 'And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.' },
						{ verse: 22, text: 'And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.' },
						{ verse: 23, text: 'And the evening and the morning were the fifth day.' },
						{ verse: 24, text: 'And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.' },
						{ verse: 25, text: 'And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.' },
						{ verse: 26, text: 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.' },
						{ verse: 27, text: 'So God created man in his own image, in the image of God created he him; male and female created he them.' },
						{ verse: 28, text: 'And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.' },
						{ verse: 29, text: 'And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.' },
						{ verse: 30, text: 'And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.' },
						{ verse: 31, text: 'And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.' }
					]
				},
				{
					chapter: 2,
					verses: [
						{ verse: 1, text: 'Thus the heavens and the earth were finished, and all the host of them.' },
						{ verse: 2, text: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.' },
						{ verse: 3, text: 'And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.' },
						{ verse: 4, text: 'These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens,' },
						{ verse: 5, text: 'And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground.' },
						{ verse: 6, text: 'But there went up a mist from the earth, and watered the whole face of the ground.' },
						{ verse: 7, text: 'And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.' },
						{ verse: 8, text: 'And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.' },
						{ verse: 9, text: 'And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil.' },
						{ verse: 10, text: 'And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.' },
						{ verse: 11, text: 'The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;' },
						{ verse: 12, text: 'And the gold of that land is good: there is bdellium and the onyx stone.' },
						{ verse: 13, text: 'And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.' },
						{ verse: 14, text: 'And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.' },
						{ verse: 15, text: 'And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.' },
						{ verse: 16, text: 'And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:' },
						{ verse: 17, text: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' },
						{ verse: 18, text: 'And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.' },
						{ verse: 19, text: 'And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.' },
						{ verse: 20, text: 'And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him.' },
						{ verse: 21, text: 'And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;' },
						{ verse: 22, text: 'And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.' },
						{ verse: 23, text: 'And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.' },
						{ verse: 24, text: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.' },
						{ verse: 25, text: 'And they were both naked, the man and his wife, and were not ashamed.' }
					]
				},
				{
					chapter: 3,
					verses: [
						{ verse: 1, text: 'Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of the garden?' },
						{ verse: 2, text: 'And the woman said unto the serpent, We may eat of the fruit of the trees of the garden:' },
						{ verse: 3, text: 'But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, neither shall ye touch it, lest ye die.' },
						{ verse: 4, text: 'And the serpent said unto the woman, Ye shall not surely die:' },
						{ verse: 5, text: 'For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.' },
						{ verse: 6, text: 'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.' },
						{ verse: 7, text: 'And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons.' },
						{ verse: 8, text: 'And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the LORD God amongst the trees of the garden.' },
						{ verse: 9, text: 'And the LORD God called unto Adam, and said unto him, Where art thou?' },
						{ verse: 10, text: 'And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.' },
						{ verse: 11, text: 'And he said, Who told thee that thou wast naked? Hast thou eaten of the tree, whereof I commanded thee that thou shouldest not eat?' },
						{ verse: 12, text: 'And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.' },
						{ verse: 13, text: 'And the LORD God said unto the woman, What is this that thou hast done? And the woman said, The serpent beguiled me, and I did eat.' },
						{ verse: 14, text: 'And the LORD God said unto the serpent, Because thou hast done this, thou art cursed above all cattle, and above every beast of the field; upon thy belly shalt thou go, and dust shalt thou eat all the days of thy life:' },
						{ verse: 15, text: 'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.' },
						{ verse: 16, text: 'Unto the woman he said, I will greatly multiply thy sorrow and thy conception; in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, and he shall rule over thee.' },
						{ verse: 17, text: 'And unto Adam he said, Because thou hast hearkened unto the voice of thy wife, and hast eaten of the tree, of which I commanded thee, saying, Thou shalt not eat of it: cursed is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life;' },
						{ verse: 18, text: 'Thorns also and thistles shall it bring forth to thee; and thou shalt eat the herb of the field;' },
						{ verse: 19, text: 'In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return.' },
						{ verse: 20, text: 'And Adam called his wife\'s name Eve; because she was the mother of all living.' },
						{ verse: 21, text: 'Unto Adam also and to his wife did the LORD God make coats of skins, and clothed them.' },
						{ verse: 22, text: 'And the LORD God said, Behold, the man is become as one of us, to know good and evil: and now, lest he put forth his hand, and take also of the tree of life, and eat, and live for ever:' },
						{ verse: 23, text: 'Therefore the LORD God sent him forth from the garden of Eden, to till the ground from whence he was taken.' },
						{ verse: 24, text: 'So he drove out the man; and he placed at the east of the garden of Eden Cherubims, and a flaming sword which turned every way, to keep the way of the tree of life.' }
					]
				}
			]
		},
		{
			name: 'Psalms',
			abbrev: 'Psa',
			chapters: [
				{
					chapter: 1,
					verses: [
						{ verse: 1, text: 'Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.' },
						{ verse: 2, text: 'But his delight is in the law of the LORD; and in his law doth he meditate day and night.' },
						{ verse: 3, text: 'And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.' },
						{ verse: 4, text: 'The ungodly are not so: but are like the chaff which the wind driveth away.' },
						{ verse: 5, text: 'Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.' },
						{ verse: 6, text: 'For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.' }
					]
				},
				{
					chapter: 23,
					verses: [
						{ verse: 1, text: 'The LORD is my shepherd; I shall not want.' },
						{ verse: 2, text: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.' },
						{ verse: 3, text: 'He restoreth my soul: he leadeth me in the paths of righteousness for his name\'s sake.' },
						{ verse: 4, text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.' },
						{ verse: 5, text: 'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.' },
						{ verse: 6, text: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.' }
					]
				},
				{
					chapter: 51,
					verses: [
						{ verse: 1, text: 'Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions.' },
						{ verse: 2, text: 'Wash me throughly from mine iniquity, and cleanse me from my sin.' },
						{ verse: 3, text: 'For I acknowledge my transgressions: and my sin is ever before me.' },
						{ verse: 4, text: 'Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified when thou speakest, and be clear when thou judgest.' },
						{ verse: 5, text: 'Behold, I was shapen in iniquity; and in sin did my mother conceive me.' },
						{ verse: 6, text: 'Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom.' },
						{ verse: 7, text: 'Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.' },
						{ verse: 8, text: 'Make me to hear joy and gladness; that the bones which thou hast broken may rejoice.' },
						{ verse: 9, text: 'Hide thy face from my sins, and blot out all mine iniquities.' },
						{ verse: 10, text: 'Create in me a clean heart, O God; and renew a right spirit within me.' },
						{ verse: 11, text: 'Cast me not away from thy presence; and take not thy holy spirit from me.' },
						{ verse: 12, text: 'Restore unto me the joy of thy salvation; and uphold me with thy free spirit.' },
						{ verse: 13, text: 'Then will I teach transgressors thy ways; and sinners shall be converted unto thee.' },
						{ verse: 14, text: 'Deliver me from bloodguiltiness, O God, thou God of my salvation: and my tongue shall sing aloud of thy righteousness.' },
						{ verse: 15, text: 'O Lord, open thou my lips; and my mouth shall shew forth thy praise.' },
						{ verse: 16, text: 'For thou desirest not sacrifice; else would I give it: thou delightest not in burnt offering.' },
						{ verse: 17, text: 'The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.' },
						{ verse: 18, text: 'Do good in thy good pleasure unto Zion: build thou the walls of Jerusalem.' },
						{ verse: 19, text: 'Then shalt thou be pleased with the sacrifices of righteousness, with burnt offering and whole burnt offering: then shall they offer bullocks upon thine altar.' }
					]
				},
				{
					chapter: 91,
					verses: [
						{ verse: 1, text: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.' },
						{ verse: 2, text: 'I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.' },
						{ verse: 3, text: 'Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.' },
						{ verse: 4, text: 'He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.' },
						{ verse: 5, text: 'Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day;' },
						{ verse: 6, text: 'Nor for the pestilence that walketh in darkness; nor for the destruction that wasteth at noonday.' },
						{ verse: 7, text: 'A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee.' },
						{ verse: 8, text: 'Only with thine eyes shalt thou behold and see the reward of the wicked.' },
						{ verse: 9, text: 'Because thou hast made the LORD, which is my refuge, even the most High, thy habitation;' },
						{ verse: 10, text: 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling.' },
						{ verse: 11, text: 'For he shall give his angels charge over thee, to keep thee in all thy ways.' },
						{ verse: 12, text: 'They shall bear thee up in their hands, lest thou dash thy foot against a stone.' },
						{ verse: 13, text: 'Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.' },
						{ verse: 14, text: 'Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name.' },
						{ verse: 15, text: 'He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him.' },
						{ verse: 16, text: 'With long life will I satisfy him, and shew him my salvation.' }
					]
				},
				{
					chapter: 100,
					verses: [
						{ verse: 1, text: 'Make a joyful noise unto the LORD, all ye lands.' },
						{ verse: 2, text: 'Serve the LORD with gladness: come before his presence with singing.' },
						{ verse: 3, text: 'Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.' },
						{ verse: 4, text: 'Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.' },
						{ verse: 5, text: 'For the LORD is good; his mercy is everlasting; and his truth endureth to all generations.' }
					]
				},
				{
					chapter: 119,
					verses: [
						{ verse: 105, text: 'Thy word is a lamp unto my feet, and a light unto my path.' },
						{ verse: 106, text: 'I have sworn, and I will perform it, that I will keep thy righteous judgments.' },
						{ verse: 107, text: 'I am afflicted very much: quicken me, O LORD, according unto thy word.' },
						{ verse: 108, text: 'Accept, I beseech thee, the freewill offerings of my mouth, O LORD, and teach me thy judgments.' },
						{ verse: 109, text: 'My soul is continually in my hand: yet do I not forget thy law.' },
						{ verse: 110, text: 'The wicked have laid a snare for me: yet I erred not from thy precepts.' },
						{ verse: 111, text: 'Thy testimonies have I taken as an heritage for ever: for they are the rejoicing of my heart.' },
						{ verse: 112, text: 'I have inclined mine heart to perform thy statutes alway, even unto the end.' }
					]
				}
			]
		},
		{
			name: 'John',
			abbrev: 'Jhn',
			chapters: [
				{
					chapter: 1,
					verses: [
						{ verse: 1, text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
						{ verse: 2, text: 'The same was in the beginning with God.' },
						{ verse: 3, text: 'All things were made by him; and without him was not any thing made that was made.' },
						{ verse: 4, text: 'In him was life; and the life was the light of men.' },
						{ verse: 5, text: 'And the light shineth in darkness; and the darkness comprehended it not.' },
						{ verse: 6, text: 'There was a man sent from God, whose name was John.' },
						{ verse: 7, text: 'The same came for a witness, to bear witness of the Light, that all men through him might believe.' },
						{ verse: 8, text: 'He was not that Light, but was sent to bear witness of that Light.' },
						{ verse: 9, text: 'That was the true Light, which lighteth every man that cometh into the world.' },
						{ verse: 10, text: 'He was in the world, and the world was made by him, and the world knew him not.' },
						{ verse: 11, text: 'He came unto his own, and his own received him not.' },
						{ verse: 12, text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:' },
						{ verse: 13, text: 'Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.' },
						{ verse: 14, text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.' }
					]
				},
				{
					chapter: 3,
					verses: [
						{ verse: 1, text: 'There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:' },
						{ verse: 2, text: 'The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him.' },
						{ verse: 3, text: 'Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.' },
						{ verse: 4, text: 'Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother\'s womb, and be born?' },
						{ verse: 5, text: 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.' },
						{ verse: 6, text: 'That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.' },
						{ verse: 7, text: 'Marvel not that I said unto thee, Ye must be born again.' },
						{ verse: 8, text: 'The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.' },
						{ verse: 9, text: 'Nicodemus answered and said unto him, How can these things be?' },
						{ verse: 10, text: 'Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?' },
						{ verse: 11, text: 'Verily, verily, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness.' },
						{ verse: 12, text: 'If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things?' },
						{ verse: 13, text: 'And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven.' },
						{ verse: 14, text: 'And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:' },
						{ verse: 15, text: 'That whosoever believeth in him should not perish, but have eternal life.' },
						{ verse: 16, text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
						{ verse: 17, text: 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.' },
						{ verse: 18, text: 'He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.' },
						{ verse: 19, text: 'And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.' },
						{ verse: 20, text: 'For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.' },
						{ verse: 21, text: 'But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God.' }
					]
				},
				{
					chapter: 14,
					verses: [
						{ verse: 1, text: 'Let not your heart be troubled: ye believe in God, believe also in me.' },
						{ verse: 2, text: 'In my Father\'s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.' },
						{ verse: 3, text: 'And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.' },
						{ verse: 4, text: 'And whither I go ye know, and the way ye know.' },
						{ verse: 5, text: 'Thomas saith unto him, Lord, we know not whither thou goest; and how can we know the way?' },
						{ verse: 6, text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
						{ verse: 7, text: 'If ye had known me, ye should have known my Father also: and from henceforth ye know him, and have seen him.' },
						{ verse: 8, text: 'Philip saith unto him, Lord, shew us the Father, and it sufficeth us.' },
						{ verse: 9, text: 'Jesus saith unto him, Have I been so long time with you, and yet hast thou not known me, Philip? he that hath seen me hath seen the Father; and how sayest thou then, Shew us the Father?' },
						{ verse: 10, text: 'Believest thou not that I am in the Father, and the Father in me? the words that I speak unto you I speak not of myself: but the Father that dwelleth in me, he doeth the works.' },
						{ verse: 11, text: 'Believe me that I am in the Father, and the Father in me: or else believe me for the very works\' sake.' },
						{ verse: 12, text: 'Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.' },
						{ verse: 13, text: 'And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son.' },
						{ verse: 14, text: 'If ye shall ask any thing in my name, I will do it.' },
						{ verse: 15, text: 'If ye love me, keep my commandments.' },
						{ verse: 16, text: 'And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;' },
						{ verse: 17, text: 'Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you.' },
						{ verse: 18, text: 'I will not leave you comfortless: I will come to you.' },
						{ verse: 19, text: 'Yet a little while, and the world seeth me no more; but ye see me: because I live, ye shall live also.' },
						{ verse: 20, text: 'At that day ye shall know that I am in my Father, and ye in me, and I in you.' },
						{ verse: 21, text: 'He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me shall be loved of my Father, and I will love him, and will manifest myself to him.' },
						{ verse: 22, text: 'Judas saith unto him, not Iscariot, Lord, how is it that thou wilt manifest thyself unto us, and not unto the world?' },
						{ verse: 23, text: 'Jesus answered and said unto him, If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him.' },
						{ verse: 24, text: 'He that loveth me not keepeth not my sayings: and the word which ye hear is not mine, but the Father\'s which sent me.' },
						{ verse: 25, text: 'These things have I spoken unto you, being yet present with you.' },
						{ verse: 26, text: 'But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.' },
						{ verse: 27, text: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.' },
						{ verse: 28, text: 'Ye have heard how I said unto you, I go away, and come again unto you. If ye loved me, ye would rejoice, because I said, I go unto the Father: for my Father is greater than I.' },
						{ verse: 29, text: 'And now I have told you before it come to pass, that, when it is come to pass, ye might believe.' },
						{ verse: 30, text: 'Hereafter I will not talk much with you: for the prince of this world cometh, and hath nothing in me.' },
						{ verse: 31, text: 'But that the world may know that I love the Father; and as the Father gave me commandment, even so I do. Arise, let us go hence.' }
					]
				},
				{
					chapter: 15,
					verses: [
						{ verse: 1, text: 'I am the true vine, and my Father is the husbandman.' },
						{ verse: 2, text: 'Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit.' },
						{ verse: 3, text: 'Now ye are clean through the word which I have spoken unto you.' },
						{ verse: 4, text: 'Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.' },
						{ verse: 5, text: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.' },
						{ verse: 6, text: 'If a man abide not in me, he is cast forth as a branch, and is withered; and men gather them, and cast them into the fire, and they are burned.' },
						{ verse: 7, text: 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you.' },
						{ verse: 8, text: 'Herein is my Father glorified, that ye bear much fruit; so shall ye be my disciples.' },
						{ verse: 9, text: 'As the Father hath loved me, so have I loved you: continue ye in my love.' },
						{ verse: 10, text: 'If ye keep my commandments, ye shall abide in my love; even as I have kept my Father\'s commandments, and abide in his love.' },
						{ verse: 11, text: 'These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.' },
						{ verse: 12, text: 'This is my commandment, That ye love one another, as I have loved you.' },
						{ verse: 13, text: 'Greater love hath no man than this, that a man lay down his life for his friends.' },
						{ verse: 14, text: 'Ye are my friends, if ye do whatsoever I command you.' },
						{ verse: 15, text: 'Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends; for all things that I have heard of my Father I have made known unto you.' },
						{ verse: 16, text: 'Ye have not chosen me, but I have chosen you, and ordained you, that ye should go and bring forth fruit, and that your fruit should remain: that whatsoever ye shall ask of the Father in my name, he may give it you.' },
						{ verse: 17, text: 'These things I command you, that ye love one another.' },
						{ verse: 18, text: 'If the world hate you, ye know that it hated me before it hated you.' },
						{ verse: 19, text: 'If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.' },
						{ verse: 20, text: 'Remember the word that I said unto you, The servant is not greater than his lord. If they have persecuted me, they will also persecute you; if they have kept my saying, they will keep yours also.' },
						{ verse: 21, text: 'But all these things will they do unto you for my name\'s sake, because they know not him that sent me.' },
						{ verse: 22, text: 'If I had not come and spoken unto them, they had not had sin: but now they have no cloke for their sin.' },
						{ verse: 23, text: 'He that hateth me hateth my Father also.' },
						{ verse: 24, text: 'If I had not done among them the works which none other man did, they had not had sin: but now have they both seen and hated both me and my Father.' },
						{ verse: 25, text: 'But this cometh to pass, that the word might be fulfilled that is written in their law, They hated me without a cause.' },
						{ verse: 26, text: 'But when the Comforter is come, whom I will send unto you from the Father, even the Spirit of truth, which proceedeth from the Father, he shall testify of me:' },
						{ verse: 27, text: 'And ye also shall bear witness, because ye have been with me from the beginning.' }
					]
				}
			]
		},
		{
			name: 'Romans',
			abbrev: 'Rom',
			chapters: [
				{
					chapter: 8,
					verses: [
						{ verse: 1, text: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.' },
						{ verse: 2, text: 'For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.' },
						{ verse: 3, text: 'For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:' },
						{ verse: 4, text: 'That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.' },
						{ verse: 5, text: 'For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit.' },
						{ verse: 6, text: 'For to be carnally minded is death; but to be spiritually minded is life and peace.' },
						{ verse: 7, text: 'Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be.' },
						{ verse: 8, text: 'So then they that are in the flesh cannot please God.' },
						{ verse: 9, text: 'But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his.' },
						{ verse: 10, text: 'And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness.' },
						{ verse: 11, text: 'But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you.' },
						{ verse: 12, text: 'Therefore, brethren, we are debtors, not to the flesh, to live after the flesh.' },
						{ verse: 13, text: 'For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live.' },
						{ verse: 14, text: 'For as many as are led by the Spirit of God, they are the sons of God.' },
						{ verse: 15, text: 'For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.' },
						{ verse: 16, text: 'The Spirit itself beareth witness with our spirit, that we are the children of God:' },
						{ verse: 17, text: 'And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.' },
						{ verse: 18, text: 'For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.' },
						{ verse: 19, text: 'For the earnest expectation of the creature waiteth for the manifestation of the sons of God.' },
						{ verse: 20, text: 'For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected the same in hope,' },
						{ verse: 21, text: 'Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.' },
						{ verse: 22, text: 'For we know that the whole creation groaneth and travaileth in pain together until now.' },
						{ verse: 23, text: 'And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body.' },
						{ verse: 24, text: 'For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for?' },
						{ verse: 25, text: 'But if we hope for that we see not, then do we with patience wait for it.' },
						{ verse: 26, text: 'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.' },
						{ verse: 27, text: 'And he that searcheth the hearts knoweth what is the mind of the Spirit, because he maketh intercession for the saints according to the will of God.' },
						{ verse: 28, text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.' },
						{ verse: 29, text: 'For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren.' },
						{ verse: 30, text: 'Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.' },
						{ verse: 31, text: 'What shall we then say to these things? If God be for us, who can be against us?' },
						{ verse: 32, text: 'He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?' },
						{ verse: 33, text: 'Who shall lay any thing to the charge of God\'s elect? It is God that justifieth.' },
						{ verse: 34, text: 'Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.' },
						{ verse: 35, text: 'Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?' },
						{ verse: 36, text: 'As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.' },
						{ verse: 37, text: 'Nay, in all these things we are more than conquerors through him that loved us.' },
						{ verse: 38, text: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,' },
						{ verse: 39, text: 'Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.' }
					]
				}
			]
		},
		{
			name: 'Proverbs',
			abbrev: 'Pro',
			chapters: [
				{
					chapter: 3,
					verses: [
						{ verse: 1, text: 'My son, forget not my law; but let thine heart keep my commandments:' },
						{ verse: 2, text: 'For length of days, and long life, and peace, shall they add to thee.' },
						{ verse: 3, text: 'Let not mercy and truth forsake thee: bind them about thy neck; write them upon the table of thine heart:' },
						{ verse: 4, text: 'So shalt thou find favour and good understanding in the sight of God and man.' },
						{ verse: 5, text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.' },
						{ verse: 6, text: 'In all thy ways acknowledge him, and he shall direct thy paths.' },
						{ verse: 7, text: 'Be not wise in thine own eyes: fear the LORD, and depart from evil.' },
						{ verse: 8, text: 'It shall be health to thy navel, and marrow to thy bones.' },
						{ verse: 9, text: 'Honour the LORD with thy substance, and with the firstfruits of all thine increase:' },
						{ verse: 10, text: 'So shall thy barns be filled with plenty, and thy presses shall burst out with new wine.' },
						{ verse: 11, text: 'My son, despise not the chastening of the LORD; neither be weary of his correction:' },
						{ verse: 12, text: 'For whom the LORD loveth he correcteth; even as a father the son in whom he delighteth.' },
						{ verse: 13, text: 'Happy is the man that findeth wisdom, and the man that getteth understanding.' },
						{ verse: 14, text: 'For the merchandise of it is better than the merchandise of silver, and the gain thereof than fine gold.' },
						{ verse: 15, text: 'She is more precious than rubies: and all the things thou canst desire are not to be compared unto her.' },
						{ verse: 16, text: 'Length of days is in her right hand; and in her left hand riches and honour.' },
						{ verse: 17, text: 'Her ways are ways of pleasantness, and all her paths are peace.' },
						{ verse: 18, text: 'She is a tree of life to them that lay hold upon her: and happy is every one that retaineth her.' },
						{ verse: 19, text: 'The LORD by wisdom hath founded the earth; by understanding hath he established the heavens.' },
						{ verse: 20, text: 'By his knowledge the depths are broken up, and the clouds drop down the dew.' },
						{ verse: 21, text: 'My son, let not them depart from thine eyes: keep sound wisdom and discretion:' },
						{ verse: 22, text: 'So shall they be life unto thy soul, and grace to thy neck.' },
						{ verse: 23, text: 'Then shalt thou walk in thy way safely, and thy foot shall not stumble.' },
						{ verse: 24, text: 'When thou liest down, thou shalt not be afraid: yea, thou shalt lie down, and thy sleep shall be sweet.' },
						{ verse: 25, text: 'Be not afraid of sudden fear, neither of the desolation of the wicked, when it cometh.' },
						{ verse: 26, text: 'For the LORD shall be thy confidence, and shall keep thy foot from being taken.' },
						{ verse: 27, text: 'Withhold not good from them to whom it is due, when it is in the power of thine hand to do it.' },
						{ verse: 28, text: 'Say not unto thy neighbour, Go, and come again, and to morrow I will give; when thou hast it by thee.' },
						{ verse: 29, text: 'Devise not evil against thy neighbour, seeing he dwelleth securely by thee.' },
						{ verse: 30, text: 'Strive not with a man without cause, if he have done thee no harm.' },
						{ verse: 31, text: 'Envy thou not the oppressor, and choose none of his ways.' },
						{ verse: 32, text: 'For the froward is abomination to the LORD: but his secret is with the righteous.' },
						{ verse: 33, text: 'The curse of the LORD is in the house of the wicked: but he blesseth the habitation of the just.' },
						{ verse: 34, text: 'Surely he scorneth the scorners: but he giveth grace unto the lowly.' },
						{ verse: 35, text: 'The wise shall inherit glory: but shame shall be the promotion of fools.' }
					]
				}
			]
		},
		{
			name: 'Matthew',
			abbrev: 'Mat',
			chapters: [
				{
					chapter: 5,
					verses: [
						{ verse: 1, text: 'And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:' },
						{ verse: 2, text: 'And he opened his mouth, and taught them, saying,' },
						{ verse: 3, text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.' },
						{ verse: 4, text: 'Blessed are they that mourn: for they shall be comforted.' },
						{ verse: 5, text: 'Blessed are the meek: for they shall inherit the earth.' },
						{ verse: 6, text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled.' },
						{ verse: 7, text: 'Blessed are the merciful: for they shall obtain mercy.' },
						{ verse: 8, text: 'Blessed are the pure in heart: for they shall see God.' },
						{ verse: 9, text: 'Blessed are the peacemakers: for they shall be called the children of God.' },
						{ verse: 10, text: 'Blessed are they which are persecuted for righteousness\' sake: for theirs is the kingdom of heaven.' },
						{ verse: 11, text: 'Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake.' },
						{ verse: 12, text: 'Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.' },
						{ verse: 13, text: 'Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.' },
						{ verse: 14, text: 'Ye are the light of the world. A city that is set on an hill cannot be hid.' },
						{ verse: 15, text: 'Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.' },
						{ verse: 16, text: 'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.' },
						{ verse: 17, text: 'Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.' },
						{ verse: 18, text: 'For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.' },
						{ verse: 19, text: 'Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.' },
						{ verse: 20, text: 'For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven.' },
						{ verse: 21, text: 'Ye have heard that it was said by them of old time, Thou shalt not kill; and whosoever shall kill shall be in danger of the judgment:' },
						{ verse: 22, text: 'But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.' },
						{ verse: 23, text: 'Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee;' },
						{ verse: 24, text: 'Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.' },
						{ verse: 25, text: 'Agree with thine adversary quickly, whiles thou art in the way with him; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.' },
						{ verse: 26, text: 'Verily I say unto thee, Thou shalt by no means come out thence, till thou hast paid the uttermost farthing.' },
						{ verse: 27, text: 'Ye have heard that it was said by them of old time, Thou shalt not commit adultery:' },
						{ verse: 28, text: 'But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.' },
						{ verse: 29, text: 'And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.' },
						{ verse: 30, text: 'And if thy right hand offend thee, cut it off, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.' },
						{ verse: 31, text: 'It hath been said, Whosoever shall put away his wife, let him give her a writing of divorcement:' },
						{ verse: 32, text: 'But I say unto you, That whosoever shall put away his wife, saving for the cause of fornication, causeth her to commit adultery: and whosoever shall marry her that is divorced committeth adultery.' },
						{ verse: 33, text: 'Again, ye have heard that it hath been said by them of old time, Thou shalt not forswear thyself, but shalt perform unto the Lord thine oaths:' },
						{ verse: 34, text: 'But I say unto you, Swear not at all; neither by heaven; for it is God\'s throne:' },
						{ verse: 35, text: 'Nor by the earth; for it is his footstool: neither by Jerusalem; for it is the city of the great King.' },
						{ verse: 36, text: 'Neither shalt thou swear by thy head, because thou canst not make one hair white or black.' },
						{ verse: 37, text: 'But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.' },
						{ verse: 38, text: 'Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth:' },
						{ verse: 39, text: 'But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.' },
						{ verse: 40, text: 'And if any man will sue thee at the law, and take away thy coat, let him have thy cloke also.' },
						{ verse: 41, text: 'And whosoever shall compel thee to go a mile, go with him twain.' },
						{ verse: 42, text: 'Give to him that asketh thee, and from him that would borrow of thee turn not thou away.' },
						{ verse: 43, text: 'Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy.' },
						{ verse: 44, text: 'But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;' },
						{ verse: 45, text: 'That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.' },
						{ verse: 46, text: 'For if ye love them which love you, what reward have ye? do not even the publicans the same?' },
						{ verse: 47, text: 'And if ye salute your brethren only, what do ye more than others? do not even the publicans so?' },
						{ verse: 48, text: 'Be ye therefore perfect, even as your Father which is in heaven is perfect.' }
					]
				}
			]
		},
		{
			name: '1 Corinthians',
			abbrev: '1Cor',
			chapters: [
				{
					chapter: 13,
					verses: [
						{ verse: 1, text: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.' },
						{ verse: 2, text: 'And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.' },
						{ verse: 3, text: 'And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.' },
						{ verse: 4, text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,' },
						{ verse: 5, text: 'Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;' },
						{ verse: 6, text: 'Rejoiceth not in iniquity, but rejoiceth in the truth;' },
						{ verse: 7, text: 'Beareth all things, believeth all things, hopeth all things, endureth all things.' },
						{ verse: 8, text: 'Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away.' },
						{ verse: 9, text: 'For we know in part, and we prophesy in part.' },
						{ verse: 10, text: 'But when that which is perfect is come, then that which is in part shall be done away.' },
						{ verse: 11, text: 'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.' },
						{ verse: 12, text: 'For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known.' },
						{ verse: 13, text: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.' }
					]
				}
			]
		},
		{
			name: 'Ephesians',
			abbrev: 'Eph',
			chapters: [
				{
					chapter: 2,
					verses: [
						{ verse: 1, text: 'And you hath he quickened, who were dead in trespasses and sins;' },
						{ verse: 2, text: 'Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience:' },
						{ verse: 3, text: 'Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others.' },
						{ verse: 4, text: 'But God, who is rich in mercy, for his great love wherewith he loved us,' },
						{ verse: 5, text: 'Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)' },
						{ verse: 6, text: 'And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:' },
						{ verse: 7, text: 'That in the ages to come he might shew the exceeding riches of his grace in his kindness toward us through Christ Jesus.' },
						{ verse: 8, text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:' },
						{ verse: 9, text: 'Not of works, lest any man should boast.' },
						{ verse: 10, text: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.' },
						{ verse: 11, text: 'Wherefore remember, that ye being in time past Gentiles in the flesh, who are called Uncircumcision by that which is called the Circumcision in the flesh made by hands;' },
						{ verse: 12, text: 'That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world:' },
						{ verse: 13, text: 'But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ.' },
						{ verse: 14, text: 'For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us;' },
						{ verse: 15, text: 'Having abolished in his flesh the enmity, even the law of commandments contained in ordinances; for to make in himself of twain one new man, so making peace;' },
						{ verse: 16, text: 'And that he might reconcile both unto God in one body by the cross, having slain the enmity thereby:' },
						{ verse: 17, text: 'And came and preached peace to you which were afar off, and to them that were nigh.' },
						{ verse: 18, text: 'For through him we both have access by one Spirit unto the Father.' },
						{ verse: 19, text: 'Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God;' },
						{ verse: 20, text: 'And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;' },
						{ verse: 21, text: 'In whom all the building fitly framed together groweth unto an holy temple in the Lord:' },
						{ verse: 22, text: 'In whom ye also are builded together for an habitation of God through the Spirit.' }
					]
				}
			]
		},
		{
			name: 'Isaiah',
			abbrev: 'Isa',
			chapters: [
				{
					chapter: 53,
					verses: [
						{ verse: 1, text: 'Who hath believed our report? and to whom is the arm of the LORD revealed?' },
						{ verse: 2, text: 'For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him.' },
						{ verse: 3, text: 'He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.' },
						{ verse: 4, text: 'Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.' },
						{ verse: 5, text: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.' },
						{ verse: 6, text: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.' },
						{ verse: 7, text: 'He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.' },
						{ verse: 8, text: 'He was taken from prison and from judgment: and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people was he stricken.' },
						{ verse: 9, text: 'And he made his grave with the wicked, and with the rich in his death; because he had done no violence, neither was any deceit in his mouth.' },
						{ verse: 10, text: 'Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand.' },
						{ verse: 11, text: 'He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities.' },
						{ verse: 12, text: 'Therefore will I divide him a portion with the great, and he shall divide the spoil with the strong; because he hath poured out his soul unto death: and he was numbered with the transgressors; and he bare the sin of many, and made intercession for the transgressors.' }
					]
				}
			]
		}
	]
};

// Helper functions
export function getBookChirho(bookName: string): BookChirho | undefined {
	return bibleKjvChirho.books.find(
		(b) => b.name.toLowerCase() === bookName.toLowerCase() || b.abbrev.toLowerCase() === bookName.toLowerCase()
	);
}

export function getChapterChirho(bookName: string, chapterNum: number): ChapterChirho | undefined {
	const book = getBookChirho(bookName);
	return book?.chapters.find((c) => c.chapter === chapterNum);
}

export function getVerseChirho(bookName: string, chapterNum: number, verseNum: number): VerseChirho | undefined {
	const chapter = getChapterChirho(bookName, chapterNum);
	return chapter?.verses.find((v) => v.verse === verseNum);
}

export function getAvailableBooksChirho(): { name: string; abbrev: string; chapterCount: number }[] {
	return bibleKjvChirho.books.map((b) => ({
		name: b.name,
		abbrev: b.abbrev,
		chapterCount: b.chapters.length
	}));
}

export function getAvailableChaptersChirho(bookName: string): number[] {
	const book = getBookChirho(bookName);
	return book?.chapters.map((c) => c.chapter) || [];
}
