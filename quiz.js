/**
 * 互动古文教学平台 - 《晓出净慈寺送林子方》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“毕竟西湖六月中”中的“毕竟”一词在诗中起什么作用？",
        py: "bì jìng xī hú liù yuè zhōng zhōng de bì jìng yī cí zài shī zhōng qǐ shén me zuò yòng",
        en: "What function does the word '毕竟' serve in this poem?",
        options: [
            {
                text: "表达强调，突出西湖六月风光与众不同",
                py: "biǎo dá qiáng diào tū chū xī hú liù yuè fēng guāng yǔ zhòng bù tóng",
                en: "Expresses emphasis, highlighting the uniqueness of West Lake's June scenery",
                correct: true,
                explanation: "“毕竟”意为“到底”，是语气强烈的强调词，诗人用它来表达对西湖六月风光的由衷赞叹和肯定。",
                explanationPy: "bì jìng yì wèi dào dǐ shì yǔ qì qiáng liè de qiáng diào cí shī rén yòng tā lái biǎo dá duì xī hú liù yuè fēng guāng de yóu zhōng zàn tàn hé kěn dìng",
                explanationEn: "'毕竟' means 'after all,' a strong emphatic word the poet uses to express his heartfelt admiration and affirmation of West Lake's June scenery."
            },
            {
                text: "表示转折，说明西湖六月风光不如其他季节",
                py: "biǎo shì zhuǎn zhé shuō míng xī hú liù yuè fēng guāng bù rú qí tā jì jié",
                en: "Indicates contrast, showing that West Lake's June scenery is inferior to other seasons",
                correct: false,
                explanation: "“毕竟”并非转折词，诗人用它是强调西湖六月的风光比其他季节更美。",
                explanationPy: "bì jìng bìng fēi zhuǎn zhé cí shī rén yòng tā shì qiáng diào xī hú liù yuè de fēng guāng bǐ qí tā jì jié gèng měi",
                explanationEn: "'毕竟' is not a contrasting word; the poet uses it to emphasize that June's scenery is even more beautiful than other seasons."
            },
            {
                text: "表示疑惑，诗人不确定西湖六月是否美丽",
                py: "biǎo shì yí huò shī rén bù què dìng xī hú liù yuè shì fǒu měi lì",
                en: "Expresses doubt; the poet is not sure if West Lake is beautiful in June",
                correct: false,
                explanation: "“毕竟”表示肯定和强调，而非疑惑。诗人对西湖六月风光是高度肯定的。",
                explanationPy: "bì jìng biǎo shì kěn dìng hé qiáng diào ér fēi yí huò shī rén duì xī hú liù yuè fēng guāng shì gāo dù kěn dìng de",
                explanationEn: "'毕竟' expresses affirmation and emphasis, not doubt. The poet is highly certain of the beauty of West Lake in June."
            },
            {
                text: "表示时间，指六月过去了",
                py: "biǎo shì shí jiān zhǐ liù yuè guò qù le",
                en: "Indicates time; June has passed",
                correct: false,
                explanation: "“毕竟”与时间无关，而是强调语气词，表示“到底”的意思。",
                explanationPy: "bì jìng yǔ shí jiān wú guān ér shì qiáng diào yǔ qì cí biǎo shì dào dǐ de yì sī",
                explanationEn: "'毕竟' has nothing to do with time; it is an emphatic word meaning 'after all.'"
            }
        ]
    },
    {
        id: 2,
        text: "“接天莲叶无穷碧”中“无穷碧”描写了莲叶的什么特点？",
        py: "jiē tiān lián yè wú qióng bì zhōng wú qióng bì miáo xiě le lián yè de shén me tè diǎn",
        en: "What characteristic of lotus leaves is described by 'endless green'?",
        options: [
            {
                text: "面积广阔，颜色碧绿，一望无际",
                py: "miàn jī guǎng kuò yán sè bì lǜ yī wàng wú jì",
                en: "Vast area, jade-green color, stretching as far as the eye can see",
                correct: true,
                explanation: "“无穷”写莲叶无边无际的广阔，“碧”写其翠绿的颜色，描绘了莲叶繁茂、一望无际的景象。",
                explanationPy: "wú qióng xiě lián yè wú biān wú jì de guǎng kuò bì xiě qí cuì lǜ de yán sè miáo huì le lián yè fán mào yī wàng wú jì de jǐng xiàng",
                explanationEn: "'Endless' describes the vastness of the lotus leaves, while 'green' describes their color, portraying a boundless expanse of lush lotus leaves."
            },
            {
                text: "莲叶很少，颜色发黄",
                py: "lián yè hěn shǎo yán sè fā huáng",
                en: "Few lotus leaves, yellowish in color",
                correct: false,
                explanation: "“无穷碧”是繁茂翠绿的景象，与稀少发黄完全相反。",
                explanationPy: "wú qióng bì shì fán mào cuì lǜ de jǐng xiàng yǔ xī shǎo fā huáng wán quán xiāng fǎn",
                explanationEn: "'Endless green' depicts a lush and verdant scene, the opposite of sparse and yellowish."
            },
            {
                text: "莲叶有香味，芬芳扑鼻",
                py: "lián yè yǒu xiāng wèi fēn fāng pū bí",
                en: "The lotus leaves are fragrant",
                correct: false,
                explanation: "诗句描写的是莲叶的颜色与范围，并未提及气味。",
                explanationPy: "shī jù miáo xiě de shì lián yè de yán sè yǔ fàn wéi bìng wèi tí jí qì wèi",
                explanationEn: "The verse describes the color and extent of the lotus leaves, without mentioning any fragrance."
            },
            {
                text: "莲叶很高，可以碰到天空",
                py: "lián yè hěn gāo kě yǐ pèng dào tiān kōng",
                en: "The lotus leaves are so tall they touch the sky",
                correct: false,
                explanation: "“接天”是夸张手法，形容莲叶繁茂一望无际仿佛与天相接，并非真的碰到天空。",
                explanationPy: "jiē tiān shì kuā zhāng shǒu fǎ xíng róng lián yè fán mào yī wàng wú jì fǎng fú yǔ tiān xiāng jiē bìng fēi zhēn de pèng dào tiān kōng",
                explanationEn: "'Reaching the sky' is hyperbole, describing the endless expanse of lotus leaves as if they touch the sky, not a literal description."
            }
        ]
    },
    {
        id: 3,
        text: "“映日荷花别样红”中“别样红”说明了什么？",
        py: "yìng rì hé huā bié yàng hóng zhōng bié yàng hóng shuō míng le shén me",
        en: "What does '别样红' in this line indicate?",
        options: [
            {
                text: "荷花在阳光映照下显得格外鲜红艳丽",
                py: "hé huā zài yáng guāng yìng zhào xià xiǎn de gé wài xiān hóng yàn lì",
                en: "The lotus flowers appear especially bright red under the sunlight",
                correct: true,
                explanation: "“别样红”意为“格外红”，莲叶已经碧绿无边，荷花本已红色，在阳光映照下更显鲜红夺目。",
                explanationPy: "bié yàng hóng yì wèi gé wài hóng lián yè yǐ jīng bì lǜ wú biān hé huā běn yǐ hóng sè zài yáng guāng yìng zhào xià gèng xiǎn xiān hóng duó mù",
                explanationEn: "'别样红' means 'especially red.' The lotus leaves are endlessly green, and the lotus flowers, already red, appear even more vivid under the sunlight."
            },
            {
                text: "荷花的颜色与其他花不一样",
                py: "hé huā de yán sè yǔ qí tā huā bù yī yàng",
                en: "The color of lotus flowers is different from other flowers",
                correct: false,
                explanation: "“别样红”并非与其他花比较，而是强调荷花在阳光下格外红艳。",
                explanationPy: "bié yàng hóng bìng fēi yǔ qí tā huā bǐ jiào ér shì qiáng diào hé huā zài yáng guāng xià gé wài hóng yàn",
                explanationEn: "'别样红' is not a comparison with other flowers; it emphasizes how exceptionally red the lotus flowers appear in the sunlight."
            },
            {
                text: "荷花花瓣的形状很特别",
                py: "hé huā huā bàn de xíng zhuàng hěn tè bié",
                en: "The shape of the lotus petals is unusual",
                correct: false,
                explanation: "“别样”此处修饰“红”，是“格外”的意思，指颜色而非形状。",
                explanationPy: "bié yàng cǐ chù xiū shì hóng shì gé wài de yì sī zhǐ yán sè ér fēi xíng zhuàng",
                explanationEn: "'别样' here modifies 'red,' meaning 'especially,' referring to color, not shape."
            },
            {
                text: "荷花在晚上比白天更红",
                py: "hé huā zài wǎn shàng bǐ bái tiān gèng hóng",
                en: "The lotus flowers are redder at night than during the day",
                correct: false,
                explanation: "“映日”明确写荷花在阳光映照下的状态，与晚上无关。",
                explanationPy: "yìng rì míng què xiě hé huā zài yáng guāng yìng zhào xià de zhuàng tài yǔ wǎn shàng wú guān",
                explanationEn: "'映日' clearly describes the lotus in sunlight, not at night."
            }
        ]
    },
    {
        id: 4,
        text: "这首诗虽然是一首送别诗，但并没有直接写送别的场景，而是通过什么方式来表达情感？",
        py: "zhè shǒu shī suī rán shì yī shǒu sòng bié shī dàn bìng méi yǒu zhí jiē xiě sòng bié de chǎng jǐng ér shì tōng guò shén me fāng shì lái biǎo dá qíng gǎn",
        en: "Though this is a farewell poem, it doesn't directly describe the farewell scene. How does it express emotion?",
        options: [
            {
                text: "通过对西湖美景的赞美，含蓄表达对友人的惜别之情",
                py: "tōng guò duì xī hú měi jǐng de zàn měi hán xù biǎo dá duì yǒu rén de xī bié zhī qíng",
                en: "Through praising West Lake's scenery, implicitly expressing reluctance to part",
                correct: true,
                explanation: "诗人没有直接写送别的伤感和不舍，而是以壮美的西湖景色寄托对友人的深情，含蓄而真挚。",
                explanationPy: "shī rén méi yǒu zhí jiē xiě sòng bié de shāng gǎn hé bù shě ér shì yǐ zhuàng měi de xī hú jǐng sè jì tuō duì yǒu rén de shēn qíng hán xù ér zhēn zhì",
                explanationEn: "The poet does not directly write about the sadness of parting but uses the magnificent West Lake scenery to express his deep affection for his friend, subtle yet sincere."
            },
            {
                text: "直接对友人诉说离别的不舍",
                py: "zhí jiē duì yǒu rén sù shuō lí bié de bù shě",
                en: "Directly telling his friend how reluctant he is to part",
                correct: false,
                explanation: "诗中并没有直接对友人说话，而是通过描写景色来表达情感。",
                explanationPy: "shī zhōng bìng méi yǒu zhí jiē duì yǒu rén shuō huà ér shì tōng guò miáo xiě jǐng sè lái biǎo dá qíng gǎn",
                explanationEn: "The poem does not directly address the friend; it expresses emotion through describing scenery."
            },
            {
                text: "通过讲述与友人的往事来表达离别",
                py: "tōng guò jiǎng shù yǔ yǒu rén de wǎng shì lái biǎo dá lí bié",
                en: "By recounting past memories with his friend",
                correct: false,
                explanation: "诗中没有任何对往事的回忆，而是全写眼前景色。",
                explanationPy: "shī zhōng méi yǒu rèn hé duì wǎng shì de huí yì ér shì quán xiě yǎn qián jǐng sè",
                explanationEn: "The poem contains no recollections of the past; it focuses entirely on the scenery before him."
            },
            {
                text: "通过描写送别队伍的盛大场面",
                py: "tōng guò miáo xiě sòng bié duì wǔ de shèng dà chǎng miàn",
                en: "By describing the grand farewell procession",
                correct: false,
                explanation: "诗中完全没有描写送别队伍，只有净慈寺、西湖、莲叶、荷花的景色。",
                explanationPy: "shī zhōng wán quán méi yǒu miáo xiě sòng bié duì wǔ zhǐ yǒu jìng cí sì xī hú lián yè hé huā de jǐng sè",
                explanationEn: "There is no description of a farewell procession; only Jingci Temple, West Lake, lotus leaves, and flowers appear in the poem."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");
