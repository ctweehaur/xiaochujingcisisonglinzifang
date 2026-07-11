/**
 * 互动古文教学平台 - 《晓出净慈寺送林子方》原文核心词解数据包
 */

const poemData = [
    // 第一句：毕竟西湖六月中，
    { text: "毕竟", py: "bì jìng", zh: "到底、终究。表示强调的语气词。", en: "after all / in the end", exam: true },
    { text: "西湖", py: "xī hú", zh: "位于杭州的著名湖泊。", en: "West Lake" },
    { text: "六月", py: "liù yuè", zh: "农历六月，公历约为七月，正是盛夏时节。", en: "June (lunar calendar)", exam: true },
    { text: "中", py: "zhōng", zh: "在……之中、正值……时候。", en: "in the midst of" },
    { text: "，", punc: true },

    // 第二句：风光不与四时同。
    { text: "风光", py: "fēng guāng", zh: "风景、景色。", en: "scenery / view" },
    { text: "不与", py: "bù yǔ", zh: "不同于、与……不一样。", en: "not the same as" },
    { text: "四时", py: "sì shí", zh: "春夏秋冬四个季节。这里指其他季节的景色。", en: "four seasons", exam: true },
    { text: "同", py: "tóng", zh: "相同、一样。", en: "same" },
    { text: "。", punc: true },

    // 第三句：接天莲叶无穷碧，
    { text: "接天", py: "jiē tiān", zh: "与天相接。形容莲叶繁茂、一望无际，仿佛延伸到天边。", en: "reaching the sky", exam: true },
    { text: "莲叶", py: "lián yè", zh: "荷叶。", en: "lotus leaves" },
    { text: "无穷", py: "wú qióng", zh: "无边无际、没有尽头。", en: "endless / boundless", exam: true },
    { text: "碧", py: "bì", zh: "碧绿、翠绿。形容莲叶的颜色。", en: "jade-green", exam: true },
    { text: "，", punc: true },

    // 第四句：映日荷花别样红。
    { text: "映日", py: "yìng rì", zh: "在阳光的映照下。", en: "reflecting the sun", exam: true },
    { text: "荷花", py: "hé huā", zh: "莲花。", en: "lotus flowers" },
    { text: "别样", py: "bié yàng", zh: "特别、与众不同、格外。", en: "uniquely / especially", exam: true },
    { text: "红", py: "hóng", zh: "红色。形容荷花在阳光下格外鲜红艳丽。", en: "red / crimson" },
    { text: "。", punc: true }
];

console.log("成功加载：text 原文数据包");
