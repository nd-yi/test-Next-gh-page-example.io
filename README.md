# gh-pages Hello World example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities.

## How to use

[demo](https://nd-yi.github.io/test-Next-gh-page-example.io/)

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example gh-pages gh-pages-app
# or
yarn create next-app --example gh-pages gh-pages-app
```

### Deploy it to github

Edit `env-config.js` and replace `'Next-gh-page-example'` by your project name.

Edit `next.config.js` and replace `'Next-gh-page-example'` by your project name.

1.  Create repository.
2.  Link it to your github account.
3.  Publish your default branch, e.g. `main`.

```bash
npm run deploy
```

Test it:

Replace `<github-user-name>` and `<github-project-name>`

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

Example:

```bash
https://github.com/thierryc/Next-gh-page-example/

# 按照以上操作  最终在下面这个格式地址能成功访问
https://thierryc.github.io/Next-gh-page-example/
```

Note 
由于我本地访问需要密码  所以最后一个git push 需要单独操作



================================================================================================
## 功能整合笔记
  1. scss 注意区分是全局还是组件级别
  2. 图片 只有内置的Image width height没有单位 layout熟悉
   

其他
 1. 如何调试  sourcemap
     和平常差不多  但是要主要 sourcemap中搜出来的源码文件是以'webpack://_N_E/./'开头的
     [参考](https://nextjs.org/docs/advanced-features/debugging)
 2. 如何查看当前是什么渲染
 3. 如何查看第三个组件是否支持服务器渲染
   当前一个问题就是查看react-device-detect对ssr支持 可以再[这里](https://github.com/duskload/react-device-detect/blob/master/docs/api.md) 有支持  但是要拿到userAgent  怎么拿到？通过 next  userAgent  关键词检索到 next-useragent 这个可以拿到 但是看[这里](https://github.com/tokuda109/next-useragent)
   发现 是可以直接在next context中拿到 这样 context.req.headers['user-agent']， 测试下 发现成功了。

## 分析
npm run lint
npm run analyze
npm run serve
[参考](https://github.com/vercel/next.js/tree/canary/examples/analyze-bundles)

## 关于ssr
服务端渲染 最后生成主要是js  在.next文件  等同于 next build  然后next start 开启项目运行

## 如何探测设备类型
https://stackoverflow.com/questions/59494037/how-to-detect-the-device-on-react-ssr-app-with-next-js
