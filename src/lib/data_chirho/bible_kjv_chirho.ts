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
				}
			]
		},
		{
			name: 'Psalms',
			abbrev: 'Psa',
			chapters: [
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
						{ verse: 28, text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.' },
						{ verse: 31, text: 'What shall we then say to these things? If God be for us, who can be against us?' },
						{ verse: 32, text: 'He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?' },
						{ verse: 35, text: 'Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?' },
						{ verse: 37, text: 'Nay, in all these things we are more than conquerors through him that loved us.' },
						{ verse: 38, text: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,' },
						{ verse: 39, text: 'Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.' }
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
