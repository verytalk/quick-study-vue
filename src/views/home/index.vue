<template>

    <el-container class="wrapper">
        <el-scrollbar class="container-left" wrap-class="container-left-wrap" :class="{'slide-hide': isCollapse, 'slide-in-left': menuShow}">
            <div class="logo">
                <!--图片logo-->

               <!--
                <img alt="element-logo"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0NnB4IiBoZWlnaHQ9IjM4cHgiIHZpZXdCb3g9IjAgMCAxNDYgMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ2Mi4yLjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpppbpobUt6buY6K6k5pWI5p6cLWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwLjAwMDAwMCwgLTE5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IEMyMTIuMTM1NDQxLDQ1LjE1NzgwNzcgMjEyLjQyMDIzNyw0NS4xNTA1MTA1IDIxMi45NjA5MzcsNDUuMTU3ODA3NyBDMjEzLjUwMTYzNyw0NS4xNjUxMDQ5IDIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTMuNjQ4ODUxLDQ1LjU3MDg1NTYgQzIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTQuNzMzODI4LDQ3LjU2NjU2NTcgMjE1LjAyNDY3Nyw0OC4wNDkxNDM0IEMyMTUuMjgzNjA4LDQ4LjQ3ODcxMzMgMjE0Ljk3MzIyMSw0OC40NzA4NjU0IDIxNC45MDE4MTYsNDguNDYzODQzNiBDMjE0LjkwMjUwNCw0OC40NjI4Nzk4IDIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODg3MDk1LDQ4LjQ2MjE5MTQgQzIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODkzMDExLDQ4LjQ2MzAxNzUgMjE0LjkwMTgxNiw0OC40NjM4NDM2IEMyMTQuODk4NjUyLDQ4LjQ2ODI0OTUgMjE0LjU5NDczMSw0OC40NzgzMDAzIDIxMS40NDc1MjgsNDguNDYyMTkxNCBDMjA3LjA1ODY0MSw0Ny44NjY1NzYyIDIwNi45MDczLDQzLjkxODY2MzggMjA2LjkwNzMsNDMuOTE4NjYzOCBMMjA2LjkwNzMsMzYuODk2ODQ4MyBMMjA0LjQzMDgxMiwzNi44OTY4NDgzIEwyMDQuNDMwODEyLDM0LjI4MDg3NzkgQzIwNC40MzA4MTIsMzMuOTI0Mjc5OCAyMDQuODQzNTYsMzMuODY3ODI5OSAyMDQuODQzNTYsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzEuMjUxODU5NCBDMjA2LjkwNzMsMzAuODI1MTgwOSAyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA3LjMyMDA0OCwzMC43MDExMjg4IEMyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA4Ljc3MjY0NiwzMC4yODU4Nzc5IDIwOS42MTc4MTYsMzAuMDQ0MTA3MiBDMjA5Ljk2NDY2MiwyOS45NDQ5NzU2IDIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMDcxNzAxLDMwLjE1MDM5ODIgQzIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMjA5Mjg0LDMwLjA3NzQyNjQgMjEwLjIwOTI4NCwzMC4zOTI3MTk2IEwyMTAuMjA5Mjg0LDM0LjAwNTUxMjUgTDIxMy43ODY0MzMsMzQuMDA1NTEyNSBDMjE0LjEzNDY1NSwzNC4wMDU1MTI1IDIxNC4xOTkxODEsMzQuNDE4NTYwNSAyMTQuMTk5MTgxLDM0LjQxODU2MDUgTDIxNC4xOTkxODEsMzcuMDM0NTMxIEwyMTAuMjA5Mjg0LDM3LjAzNDUzMSBMMjEwLjIwOTI4NCw0My4wOTI1Njc4IEMyMTAuMjA5Mjg0LDQ0Ljg1MzM5MTMgMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IDIxMi4xMzU0NDEsNDUuMTU3ODA3NyBMMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IFogTTIwMS41NDE1NzYsNDguMTg2ODI2MSBMMTk5LjM0MDI1Myw0OC4xODY4MjYxIEMxOTguOTA4MzgxLDQ4LjE4NjgyNjEgMTk4LjkyNzUwNSw0Ny42MzYwOTU1IDE5OC45Mjc1MDUsNDcuNjM2MDk1NSBMMTk4LjkyNzUwNSwzNy40NDc1Nzg5IEMxOTguOTI3NTA1LDM2LjgyODY5NTQgMTk4LjEwMjAwOSwzNi42MjE0ODMgMTk4LjEwMjAwOSwzNi42MjE0ODMgTDE5My41NjE3ODEsMzYuNjIxNDgzIEMxOTIuODg0NDYyLDM2LjYyMTQ4MyAxOTIuODczODY4LDM3LjQ0NzU3ODkgMTkyLjg3Mzg2OCwzNy40NDc1Nzg5IEwxOTIuODczODY4LDQ3Ljc3Mzc3ODEgQzE5Mi44NzM4NjgsNDguMTc4NzAyOCAxOTIuNDYxMTIsNDguMTg2ODI2MSAxOTIuNDYxMTIsNDguMTg2ODI2MSBMMTkwLjI1OTc5Nyw0OC4xODY4MjYxIEMxODkuNzc1NzgyLDQ4LjE4NjgyNjEgMTg5Ljg0NzA0OSw0Ny42MzYwOTU1IDE4OS44NDcwNDksNDcuNjM2MDk1NSBMMTg5Ljg0NzA0OSwzNC44MzE2MDg1IEMxODkuODQ3MDQ5LDMzLjgwMzExOSAxOTEuMDg1MjkzLDMzLjU5MjQ2NDYgMTkxLjA4NTI5MywzMy41OTI0NjQ2IEwyMDAuNzE2MDgsMzMuNTkyNDY0NiBDMjAxLjY3Nzc4MywzMy41OTI0NjQ2IDIwMS45NTQzMjQsMzQuODMxNjA4NSAyMDEuOTU0MzI0LDM0LjgzMTYwODUgTDIwMS45NTQzMjQsNDcuNDk4NDEyOCBDMjAxLjk1NDMyNCw0OC4yMTg2MzA4IDIwMS41NDE1NzYsNDguMTg2ODI2MSAyMDEuNTQxNTc2LDQ4LjE4NjgyNjEgTDIwMS41NDE1NzYsNDguMTg2ODI2MSBaIE0xODUuODU3MTUyLDQyLjQwNDE1NDYgTDE3Ny4zMjcwMjcsNDIuNDA0MTU0NiBMMTc3LjMyNzAyNyw0NC40NjkzOTQ0IEMxNzcuMzI3MDI3LDQ1LjIxMzU2OTEgMTc4LjI5MDEwNiw0NS40MzMxNzMgMTc4LjI5MDEwNiw0NS40MzMxNzMgTDE4NS4xNjkyMzksNDUuNDMzMTczIEMxODUuNjU4NzU4LDQ1LjQzMzE3MyAxODUuOTk0NzM1LDQ1Ljg0NjIyMSAxODUuOTk0NzM1LDQ1Ljg0NjIyMSBDMTg1Ljk5NDczNSw0NS44NDYyMjEgMTg2LjU5NTAwOCw0Ny4wOTUxNDAzIDE4Ni44MjAyMzEsNDcuNjM2MDk1NSBDMTg3LjA0NTQ1NCw0OC4xNzcwNTA2IDE4Ni40MDc0ODMsNDguMTg2ODI2MSAxODYuNDA3NDgzLDQ4LjE4NjgyNjEgTDE3Ni4wODg3ODMsNDguMTg2ODI2MSBDMTc0Ljg0NjEzNiw0OC4xODY4MjYxIDE3NC41NzUzNzQsNDYuNjcyMzE2OSAxNzQuNTc1Mzc0LDQ2LjY3MjMxNjkgTDE3NC41NzUzNzQsMzQuOTY5MjkxMSBDMTc0LjU3NTM3NCwzNC4yOTYyOTgzIDE3NS41Mzg0NTIsMzQuMDA1NTEyNSAxNzUuNTM4NDUyLDM0LjAwNTUxMjUgTDE4NS44NTcxNTIsMzQuMDA1NTEyNSBDMTg2Ljg5NDExMywzNC4wMDU1MTI1IDE4Ny4wOTUzOTYsMzUuMjQ0NjU2NCAxODcuMDk1Mzk2LDM1LjI0NDY1NjQgTDE4Ny4wOTUzOTYsNDEuMTY1MDEwNyBDMTg3LjA5NTM5Niw0Mi4xNjM4OTgzIDE4NS44NTcxNTIsNDIuNDA0MTU0NiAxODUuODU3MTUyLDQyLjQwNDE1NDYgTDE4NS44NTcxNTIsNDIuNDA0MTU0NiBaIE0xODQuMzQzNzQzLDM3LjQ0NzU3ODkgQzE4NC4zNDM3NDMsMzcuNDQ3NTc4OSAxODQuMjU3MDY2LDM2Ljc1OTE2NTcgMTgzLjY1NTgzLDM2Ljc1OTE2NTcgTDE3OC4wMTQ5NCwzNi43NTkxNjU3IEMxNzguMDE0OTQsMzYuNzU5MTY1NyAxNzcuMzI3MDI3LDM2Ljk0Mzc5ODEgMTc3LjMyNzAyNywzNy40NDc1Nzg5IEwxNzcuMzI3MDI3LDM4Ljk2MjA4ODIgQzE3Ny4zMjcwMjcsMzguOTYyMDg4MiAxNzcuMzQ2ODM5LDM5LjY1MDUwMTQgMTc4LjAxNDk0LDM5LjY1MDUwMTQgTDE4My42NTU4MywzOS42NTA1MDE0IEMxODMuNjU1ODMsMzkuNjUwNTAxNCAxODQuMzQzNzQzLDM5LjQ4MDQ2MzQgMTg0LjM0Mzc0MywzOC44MjQ0MDU1IEwxODQuMzQzNzQzLDM3LjQ0NzU3ODkgTDE4NC4zNDM3NDMsMzcuNDQ3NTc4OSBaIE0xNzEuNDEwOTcyLDQ4LjE4NjgyNjEgTDE2OS4yMDk2NSw0OC4xODY4MjYxIEMxNjguOTE5MjEzLDQ4LjE4NjgyNjEgMTY4Ljc5NjkwMiw0Ny43NzM3NzgxIDE2OC43OTY5MDIsNDcuNzczNzc4MSBMMTY4Ljc5NjkwMiwzNy40NDc1Nzg5IEMxNjguNzk2OTAyLDM2LjgwNzIxNjkgMTY3Ljk3MTQwNiwzNi42MjE0ODMgMTY3Ljk3MTQwNiwzNi42MjE0ODMgTDE2NS45MDc2NjYsMzYuNjIxNDgzIEMxNjUuMzMxODgyLDM2LjYyMTQ4MyAxNjUuMjE5NzUyLDM3LjQ0NzU3ODkgMTY1LjIxOTc1MiwzNy40NDc1Nzg5IEwxNjUuMjE5NzUyLDQ3Ljc3Mzc3ODEgQzE2NS4yMTk3NTIsNDguMTE2MzMyNiAxNjQuODA3MDA0LDQ4LjE4NjgyNjEgMTY0LjgwNzAwNCw0OC4xODY4MjYxIEwxNjIuNjA1NjgyLDQ4LjE4NjgyNjEgQzE2Mi4yOTk1Niw0OC4xODY4MjYxIDE2Mi4xOTI5MzQsNDcuNzczNzc4MSAxNjIuMTkyOTM0LDQ3Ljc3Mzc3ODEgTDE2Mi4xOTI5MzQsMzcuNDQ3NTc4OSBDMTYyLjE5MjkzNCwzNi43OTI4OTc5IDE2MS4zNjc0MzgsMzYuNjIxNDgzIDE2MS4zNjc0MzgsMzYuNjIxNDgzIEwxNTkuMzAzNjk4LDM2LjYyMTQ4MyBDMTU4LjY3Mzk4MiwzNi42MjE0ODMgMTU4LjYxNTc4NCwzNy40NDc1Nzg5IDE1OC42MTU3ODQsMzcuNDQ3NTc4OSBMMTU4LjYxNTc4NCw0Ny43NzM3NzgxIEMxNTguNjE1Nzg0LDQ4LjIxNTczOTUgMTU4LjIwMzAzNiw0OC4xODY4MjYxIDE1OC4yMDMwMzYsNDguMTg2ODI2MSBMMTU2LjAwMTcxNCw0OC4xODY4MjYxIEMxNTUuNTg5Mzc4LDQ4LjE4NjgyNjEgMTU1LjU4ODk2Niw0Ny43NzM3NzgxIDE1NS41ODg5NjYsNDcuNzczNzc4MSBMMTU1LjU4ODk2NiwzNC42OTM5MjU4IEMxNTUuNTg4OTY2LDMzLjkzNjI1ODIgMTU2LjY4OTYyNywzMy41OTI0NjQ2IDE1Ni42ODk2MjcsMzMuNTkyNDY0NiBMMTcwLjQ0Nzg5NCwzMy41OTI0NjQ2IEMxNzEuNTUyMjcsMzMuNTkyNDY0NiAxNzEuODIzNzIsMzQuOTY5MjkxMSAxNzEuODIzNzIsMzQuOTY5MjkxMSBMMTcxLjgyMzcyLDQ3Ljc3Mzc3ODEgQzE3MS44MjM3Miw0OC4yNDkzMzQgMTcxLjQxMDk3Miw0OC4xODY4MjYxIDE3MS40MTA5NzIsNDguMTg2ODI2MSBMMTcxLjQxMDk3Miw0OC4xODY4MjYxIFogTTE1MS40NjE0ODYsNDIuNDA0MTU0NiBMMTQyLjkzMTM2LDQyLjQwNDE1NDYgTDE0Mi45MzEzNiw0NC40NjkzOTQ0IEMxNDIuOTMxMzYsNDUuMjEzNTY5MSAxNDMuODk0NDM5LDQ1LjQzMzE3MyAxNDMuODk0NDM5LDQ1LjQzMzE3MyBMMTUwLjc3MzU3Miw0NS40MzMxNzMgQzE1MS4yNjMwOTIsNDUuNDMzMTczIDE1MS41OTkwNjgsNDUuODQ2MjIxIDE1MS41OTkwNjgsNDUuODQ2MjIxIEMxNTEuNTk5MDY4LDQ1Ljg0NjIyMSAxNTIuMTk5MjA0LDQ3LjA5NTE0MDMgMTUyLjQyNDU2NCw0Ny42MzYwOTU1IEMxNTIuNjQ5Nzg3LDQ4LjE3NzA1MDYgMTUyLjAxMTgxNiw0OC4xODY4MjYxIDE1Mi4wMTE4MTYsNDguMTg2ODI2MSBMMTQxLjY5MzExNyw0OC4xODY4MjYxIEMxNDAuNDUwNDcsNDguMTg2ODI2MSAxNDAuMTc5NzA3LDQ2LjY3MjMxNjkgMTQwLjE3OTcwNyw0Ni42NzIzMTY5IEwxNDAuMTc5NzA3LDM0Ljk2OTI5MTEgQzE0MC4xNzk3MDcsMzQuMjk2Mjk4MyAxNDEuMTQyNzg2LDM0LjAwNTUxMjUgMTQxLjE0Mjc4NiwzNC4wMDU1MTI1IEwxNTEuNDYxNDg2LDM0LjAwNTUxMjUgQzE1Mi40OTg0NDYsMzQuMDA1NTEyNSAxNTIuNjk5NzMsMzUuMjQ0NjU2NCAxNTIuNjk5NzMsMzUuMjQ0NjU2NCBMMTUyLjY5OTczLDQxLjE2NTAxMDcgQzE1Mi42OTk3Myw0Mi4xNjM4OTgzIDE1MS40NjE0ODYsNDIuNDA0MTU0NiAxNTEuNDYxNDg2LDQyLjQwNDE1NDYgTDE1MS40NjE0ODYsNDIuNDA0MTU0NiBaIE0xNDkuOTQ4MDc2LDM3LjQ0NzU3ODkgQzE0OS45NDgwNzYsMzcuNDQ3NTc4OSAxNDkuODYxMzk5LDM2Ljc1OTE2NTcgMTQ5LjI2MDE2MywzNi43NTkxNjU3IEwxNDMuNjE5Mjc0LDM2Ljc1OTE2NTcgQzE0My42MTkyNzQsMzYuNzU5MTY1NyAxNDIuOTMxMzYsMzYuOTQzNzk4MSAxNDIuOTMxMzYsMzcuNDQ3NTc4OSBMMTQyLjkzMTM2LDM4Ljk2MjA4ODIgQzE0Mi45MzEzNiwzOC45NjIwODgyIDE0Mi45NTExNzIsMzkuNjUwNTAxNCAxNDMuNjE5Mjc0LDM5LjY1MDUwMTQgTDE0OS4yNjAxNjMsMzkuNjUwNTAxNCBDMTQ5LjI2MDE2MywzOS42NTA1MDE0IDE0OS45NDgwNzYsMzkuNDgwNDYzNCAxNDkuOTQ4MDc2LDM4LjgyNDQwNTUgTDE0OS45NDgwNzYsMzcuNDQ3NTc4OSBMMTQ5Ljk0ODA3NiwzNy40NDc1Nzg5IFogTTEzOC4xMTU5NjcsNDguMTg2ODI2MSBMMTMyLjg4NzgyNiw0OC4xODY4MjYxIEMxMzIuODg3ODI2LDQ4LjE4NjgyNjEgMTI5LjA2MTkyNyw0OC4wMDYxODY1IDEyOC43NjAzNDYsNDQuMTk0MDI5MSBDMTI4Ljc0ODIzOSw0MC4yNzkwMjI4IDEyOC43NjAzNDYsMjguMDg1MTU4MyAxMjguNzYwMzQ2LDI4LjA4NTE1ODMgTDEzMS4yMzY4MzQsMjguMDg1MTU4MyBDMTMxLjIzNjgzNCwyOC4wODUxNTgzIDEzMi4wNjIzMywyOC4wNzAxNTA5IDEzMi4wNjIzMywyOC45MTEyNTQzIEwxMzIuMDYyMzMsNDMuMzY3OTMzMSBDMTMyLjA2MjMzLDQzLjM2NzkzMzEgMTMyLjM1MDAxNSw0NC41NjM4NDQ3IDEzMy45ODg0ODcsNDUuMDIwMTI1IEMxMzUuODM5OCw0NS4wMTA3NjI2IDEzNi4xODk4MSw0NS4wMjAxMjUgMTM2LjE4OTgxLDQ1LjAyMDEyNSBDMTM2LjE4OTgxLDQ1LjAyMDEyNSAxMzYuOTA3MzAzLDQ0Ljc5MDE5NSAxMzcuNDI4MDU0LDQ1LjcwODUzODMgQzEzNy45NDg4MDQsNDYuNjI2ODgxNiAxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjUyODcxNSw0Ny42MzYwOTU1IEMxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjYxMTU0LDQ4LjE4NjgyNjEgMTM4LjExNTk2Nyw0OC4xODY4MjYxIEwxMzguMTE1OTY3LDQ4LjE4NjgyNjEgWiBNMTExLjU2MjUxMyw0Ny4zNjA3MzAyIEwxMTEuNTYyNTEzLDI5LjE4NjYxOTYgQzExMS41NjI1MTMsMjguMzgwNzYzIDExMi4yNTA0MjYsMjguMjIyODQxIDExMi4yNTA0MjYsMjguMjIyODQxIEwxMjUuMTgzMTk3LDI4LjIyMjg0MSBDMTI1LjkwNjQ2OSwyOC4yMjI4NDEgMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS41OTU5NDUsMjkuMDQ4OTM2OSBDMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS4xOTI4MjcsMzAuMTY2MDk0IDEyNC45MDgwMzEsMzAuNzAxMTI4OCBDMTI0LjYyMzIzNSwzMS4yMzYxNjM2IDEyNC4wODI1MzUsMzEuMjUxODU5NCAxMjQuMDgyNTM1LDMxLjI1MTg1OTQgTDExNS42ODk5OTMsMzEuMjUxODU5NCBDMTE0LjkwODUyMywzMS4yNTE4NTk0IDExNC44NjQ0OTcsMzEuOTQwMjcyNyAxMTQuODY0NDk3LDMxLjk0MDI3MjcgTDExNC44NjQ0OTcsMzYuNDgzODAwMyBMMTI0LjM1NzcwMSwzNi40ODM4MDAzIEMxMjQuOTE0NjM1LDM2LjQ4MzgwMDMgMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyNC42MzI4NjYsMzcuMTcyMjEzNiBDMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyMy45MjE4MzksMzguNjg4OTI1OCAxMjMuNjY5Nzg3LDM5LjA5OTc3MDggQzEyMy40MTc3MzYsMzkuNTEwNjE1OSAxMjIuODQ0MjkxLDM5LjUxMjgxODggMTIyLjg0NDI5MSwzOS41MTI4MTg4IEwxMTQuODY0NDk3LDM5LjUxMjgxODggTDExNC44NjQ0OTcsNDQuMzMxNzExNyBDMTE0Ljg2NDQ5Nyw0NC45ODg0NTggMTE1LjU1MjQxLDQ1LjE1NzgwNzcgMTE1LjU1MjQxLDQ1LjE1NzgwNzcgTDEyNC4zNTc3MDEsNDUuMTU3ODA3NyBDMTI0Ljk5NjIyMiw0NS4xNTc4MDc3IDEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjUuMTgzMTk3LDQ1LjU3MDg1NTYgQzEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjYuMDU1MTk2LDQ2LjkzMjM5OTQgMTI2LjQyMTQ0MSw0Ny40OTg0MTI4IEMxMjYuNzg3ODIzLDQ4LjA2NDQyNjIgMTI2LjI4Mzg1OCw0OC4xODY4MjYxIDEyNi4yODM4NTgsNDguMTg2ODI2MSBMMTEyLjM4ODAwOSw0OC4xODY4MjYxIEMxMTEuODE0MTUxLDQ4LjE4NjgyNjEgMTExLjU2MjUxMyw0Ny4zNjA3MzAyIDExMS41NjI1MTMsNDcuMzYwNzMwMiBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+">
                -->
                <img alt="element-logo"
                     src="data:image/png;base64,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" />
                <!--文字logo-->
                <span>后台</span>
            </div>
            <el-menu
                class="menu"
                :default-active="onRoutes"
                :collapse="isCollapse"
                style="border: none;"
                text-color="rgb(191, 203, 217)"
                background-color="rgb(48, 65, 86)"
                active-text-color="rgb(64, 158, 255)"
                unique-opened
                router>
                <sidebar-item v-for="item in routers" :key="item.path" :item='item' ></sidebar-item>
            </el-menu>
        </el-scrollbar>

        <el-container class="container-box" v-bind:class="{'slide-hide': isCollapse, 'slide-in-left': menuShow}">
            <el-header class="header">
                <div class="header-left">
                    <div class="header-toggle" @click="menuShow = !menuShow; showSideBar()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="slide-toggle" :class="{'slide-toggle-open': isCollapse}" @click="toggleSideBar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="header-tabs-box">
                    <el-breadcrumb class="app-levelbar" separator="/">
                        <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
                        <span v-if='item.redirect==="noredirect"||index==levelList.length-1'
                              class="no-redirect">{{item.name}}</span>
                            <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>

                <div class="header-right">
                    <el-dropdown trigger="click">
                        <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
                        <span>{{username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><span @click="handlePassword">修改密码</span></el-dropdown-item>
                            <el-dropdown-item><span @click="loginOut">退出登录</span></el-dropdown-item>
                            <el-dropdown-item disabled divided>主题切换</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>


                <!--新增界面-->
                <el-dialog title="修改密码" :visible.sync="passwordFormVisible" width="85%" top="5vh">
                    <el-form :model="passwordFormData" :rules="passwordFormDataRules" ref="passwordFormData">
                        <el-form-item label="原始密码" prop="old_password">
                            <el-input type="password" v-model="passwordFormData.old_password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="new_password">
                            <el-input type="password" v-model="passwordFormData.new_password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="check_new_password">
                            <el-input type="password" v-model="passwordFormData.check_new_password" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="passwordFormVisible = !passwordFormVisible">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit('passwordFormData')" :loading="passwordLoading">提交</el-button>
                    </div>
                </el-dialog>

            </el-header>

            <!--遮板-->
            <div class="main-mask"
                 v-show="menuShow"
                 @click="menuShow = !menuShow"></div>

            <el-main class="main">

                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>

</template>


<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem.vue";
import { password } from "../../api/auth/login";
import { getAdminId } from "../../utils/auth";
export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.passwordFormData.check_new_password !== "") {
                    this.$refs.passwordFormData.validateField(
                        "check_new_password"
                    );
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.passwordFormData.new_password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            menuShow: false,
            levelList: null,
            passwordLoading: false,
            passwordFormVisible: false,
            passwordFormData: {
                old_password: "",
                new_password: "",
                check_new_password: ""
            },
            passwordFormDataRules: {
                old_password: [
                    {
                        required: true,
                        message: "请输入原始密码",
                        trigger: "blur"
                    }
                ],
                new_password: [
                    {
                        required: true,
                        message: "请输入新密码",
                        trigger: "blur"
                    },
                    { validator: validatePass, trigger: "blur" }
                ],
                check_new_password: [
                    {
                        required: true,
                        message: "请再次输入密码",
                        trigger: "blur"
                    },
                    { validator: validatePass2, trigger: "blur" }
                ]
            }
        };
    },
    components: {
        SidebarItem
    },
    computed: {
        ...mapGetters({
            routers: "routers"
        }),
        onRoutes() {
            return this.$route.path;
        },
        username() {
            let username = this.$store.state.admin.userName;
            return !username ? this.name : username;
        },
        isCollapse() {
            return this.$store.state.app.sidebar.opened;
        }
    },
    mounted() {},
    methods: {
        toggleSideBar() {
            this.$store.dispatch("ToggleSideBar");
        },
        showSideBar() {
            this.$store.dispatch("ShowSideBar");
        },
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name);
            const first = matched[0];
            if (first && (first.name !== "首页" || first.path !== "")) {
                matched = [{ name: "首页", path: "/" }].concat(matched);
            }
            this.levelList = matched;
        },
        loginOut() {
            this.$confirm("此操作将退出系统, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$store.dispatch("loginOut").then(() => {
                        location.reload(); // 为了重新实例化vue-router对象 避免bug
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "error",
                        message: "操作失败"
                    });
                });
        },
        // 显示修改密码界面
        handlePassword() {
            this.passwordFormVisible = true;
            this.passwordFormData = {
                old_password: "",
                new_password: "",
                check_new_password: ""
            };
        },
        addSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.passwordLoading = true;
                    let data = Object.assign({}, this.passwordFormData);
                    data.adminId = getAdminId();
                    password(data)
                        .then(res => {
                            this.passwordLoading = false;
                            if (res.code) {
                                this.$message({
                                    message: res.message,
                                    type: "error"
                                });
                            } else {
                                this.$message({
                                    message: "修改成功",
                                    type: "success"
                                });
                                // 刷新表单
                                this.$refs["passwordFormData"].resetFields();
                                this.passwordFormVisible = false;
                                this.$store.dispatch("loginOut").then(() => {
                                    location.reload(); // 为了重新实例化vue-router对象 避免bug
                                });
                            }
                        })
                        .catch(() => {
                            this.$message({
                                type: "error",
                                message: "操作失败"
                            });
                        });
                }
            });
        }
    },
    created() {
        this.getBreadcrumb();
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        }
    }
};
</script>


<style type="text/scss" lang="scss">
@import "../../styles/mixin";
.el-header {
    /*background-color: #eef1f6;*/
    color: #333;
    padding: 0 10px;
}

.el-aside {
    color: #333;
}

.el-main {
    position: relative;
    padding: 0 10px 10px;
    background-color: #fff;
    margin-left: 7px;
    margin-top: 5px;
}
.main-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: 100;
    background-color: #000;
    opacity: 0.3;
}

.move-enter-active,
.move-leave-active {
    transition: opacity 0.5s;
}

.move-enter,
.move-leave {
    opacity: 0;
}

.wrapper {
    height: 100%;
    overflow-y: hidden;
    background-color: #f5f7f9;
}

.container-box {
    height: 100%;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    overflow-y: auto;
}

.container-left {
    background-color: rgb(48, 65, 86);
    transition: left 0.23s ease-in-out;
    height: 100%;
    flex: 0 0 auto;
}
.container-left-wrap {
    overflow-x: hidden !important;
}

.container-left .svg-icon {
    font-size: 20px;
    margin-right: 5px;
}

.container-left:not(.slide-hide) {
    width: 200px;
}

.container-left.slide-hide {
    .logo img {
        display: none;
    }
    .logo span {
        display: inline-block;
    }
}

.menu {
    width: 100% !important;
}

/*.menu::-webkit-scrollbar{*/
/*display: none;*/
/*}*/

.header {
    position: relative;
    text-align: left;
    font-size: 12px;
    line-height: $header-height;
    border-bottom: 1px solid #d8dce5;
    background-color: #fff;
}

.logo {
    display: block;
    width: 100%;
    line-height: 80px;
    text-align: center;
    color: #fff;
    transition: display 0.7s ease-in-out;
    img {
        vertical-align: middle;
    }
    span {
        display: none;
    }
}

.header-left {
    display: inline-block;
    height: $header-height;
    overflow: hidden;
}

.header-tabs-box {
    display: inline-block;
    height: $header-height;
    max-width: 60%;
    overflow: hidden;
}

.header-right {
    display: flex;
    width: 80px;
    height: 100%;
    margin-left: 10px;
    float: right;
    .el-dropdown {
        display: flex;
        cursor: pointer;
    }
    span {
        display: inline-block;
        @include text-overflow;
    }
    i {
        line-height: $header-height;
        margin-top: 2px;
    }
}

.app-levelbar {
    margin-left: 20px;
    line-height: 57px !important;
}

/*宽屏时出现*/
.slide-toggle {
    display: inline-block;
    height: $header-height;
    line-height: $header-height;
    text-align: center;
    cursor: pointer;
}

.slide-toggle span {
    display: inline-block;
    width: 2px;
    height: 12px;
    background-color: rgba(135, 141, 153, 0.8);
    margin-left: 5px;
}
.slide-toggle-open span {
    display: block;
    margin-left: 4px;
    margin-top: 4px;
    width: 16px;
    height: 2px;
}
.slide-toggle-open {
    padding-top: 17px;
}

@media screen and (min-width: 768px) {
    .main-mask {
        display: none;
    }
}

/*.slide-hide {*/
/*width: 64px !important;*/
/*}*/

@media screen and (max-width: 768px) {
    .main {
        overflow-y: scroll !important;
        -webkit-overflow-scrolling: touch;
    }

    .slide-hide.slide-in-left {
        -webkit-transform: translate3d(64px, 0, 0) !important;
        transform: translate3d(64px, 0, 0) !important;
    }
    .container-left.slide-hide.slide-in-left {
        left: -64px;
        width: 64px;
    }
    .container-left.slide-in-left {
        left: 0;
    }
    .container-left {
        margin-right: 0;
        opacity: 1;
        position: absolute !important;
        top: 0;
        left: -225px;
        z-index: 10;
        padding: 0;
    }

    .container-box.slide-in-left {
        min-width: 0;
        opacity: 1;
        -webkit-transform: translate3d(187px, 0, 0);
        transform: translate3d(187px, 0, 0);
        overflow: initial;
    }
    .header-toggle {
        display: block;
        /*background-color: #26a2ff;*/
        border-radius: 4px;
        /*border: 1px solid #fff;*/
        height: 40px;
        margin: 10px 0;
        padding: 2px 6px;
        outline: none;
        width: 40px;
        z-index: 10;
    }

    .header-toggle span {
        display: block;
        width: 100%;
        height: 4px;
        margin: 5px auto;
        background-color: rgba(135, 141, 153, 0.8);
    }

    .logo {
        display: none;
    }
    .slide-toggle {
        display: none;
    }
}
</style>
