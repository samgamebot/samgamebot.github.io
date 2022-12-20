module.exports = {
    theme: 'antdocs', //使用主题 https://antdocs.js.org/
    plugins: ['fulltext-search'], // yarn add -D vuepress-plugin-fulltext-search -D
    head: [
        [
            'link',
            { rel: 'icon', href: '/assets/img/logo.png' }
        ]
    ],
    title: '萝卜の窝',
    description: 'A Easy Guide for vuepress',
    nextLinks: true,
    prevLinks: true,
    themeConfig: {
        backToTop: true,
        isDarkMode: true,
        sidebar: {
            '/guide/': [
                '',
                'pcrclanbattle',
                'pcrclanbattle2',
                'pcrtools',
                'pcrgames',
                'genshin',
                'otherplay',
                'othertools',
                'other',
            ],
            '/shop/': [
                '',
            ],
        },
        displayAllHeaders: true,
        //展开sidebar
        logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/samgamebot/samgamebot.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑该界面',
        // 最后更新时间
        lastUpdated: 'Last Updated',
    }
}
// module.exports = {
// }