module.exports = `
doctype html
html
  head
    mete(charset="utf-8")
    meta(name="viewport", content="width=device-width, initial-scale=1")
    title Koa Server HTML
    link(href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet")
    script(src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js")
    script(src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js")
  body
    .container
      .row
        .col-md-8
          h1 Hi #{you}
          p This is #{me}
        .ol-md-4
          p 测试静态 HTMl 页面
`
