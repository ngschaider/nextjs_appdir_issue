# nextjs_appdir_issue

This is a reproduction repository for an issue on Next.js.

## Reproduction steps

- Run `npm run dev`
- Open `http://localhost:3000/api/test_app` and `http://localhost:3000/api/test_pages` to make sure the routes are compiled (see below for details)
- Refresh both routes and see, that both values are different.

Expected behaviour would be, that the two values match since they are imported from the same file.