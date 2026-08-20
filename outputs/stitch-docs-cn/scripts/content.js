const P=(path,kicker,title,intro,sections,next,prev)=>({path,kicker,title,intro,sections,next,prev});
const S=(title,blocks)=>({title,blocks});
const p=text=>({type:'p',text}), list=items=>({type:'list',items}), callout=text=>({type:'callout',text}), image=(src,alt,caption)=>({type:'image',src,alt,caption}), code=(code,label)=>({type:'code',code,label}), prompt=rows=>({type:'prompt',rows}), table=(headers,rows)=>({type:'table',headers,rows});
const link=(path,title)=>({path,title});

const learn=[
P('/docs/learn/overview/','基础','使用 Stitch 设计所需的一切','一份带有明确观点的快速入门：从想法开始，在迭代中找到合适的设计。',[
 S('更好的提示词，也带来更好的设计',[p('构思是关键。最难的是越过空白页面；真正高质量的结果来自持续迭代，而不是一次写出完美提示词。'),image('https://stitch.withgoogle.com/docs/stitch-overview-gen-swoop@2x.png','Stitch 生成设计概览','Stitch 生成设计概览')]),
 S('起始提示词示例',[p('初始提示词可以遵循这个公式：'),prompt([{key:'想法',value:'页面或应用是什么。'},{key:'主题',value:'核心视觉主题与氛围。'},{key:'内容',value:'页面需要呈现的具体内容。'},{key:'图片',value:'可选的参考图片。'}]),p('先描述要放在页面上的具体内容和大致气质，不必一开始就纠结字体和十六进制颜色。'),prompt([{key:'想法',value:'一个名为「The Pacing Project」的跑步播客落地页。'},{key:'主题',value:'现代、锐利、高对比；使用黑白与硬朗的几何角度。'},{key:'内容',value:'Hero 区域包含「关于比赛与正确配速的故事和经验」，并提供播客平台链接。'}])]),
 S('选择设备类型',[p('应用还是网页？先选一个最合适的形式即可。Stitch 支持在迭代过程中转换设备类型。现在点击生成。')]),
 S('浏览并控制画布',[p('把画布操作理解为「选择」与「导航」两种模式。按 `V` 切换 Select 工具，按 `H` 切换 Pan 工具；按 `⌘←` / `Ctrl+←` 回到最近的屏幕，按 `⌘→` / `Ctrl+→` 在屏幕间切换。按 `?` 可查看全部快捷键。')]),
 S('开始构思',[p('设计出现后，真正的构思才开始。保留初次生成中做得好的部分，用工具修正不满意的部分。')]),
 S('一次只做一个主要改动',[p('选中要修改的屏幕，点击 Edit、Add to Chat，再写出明确的改动和实现方式。'),prompt([{key:'目标组件',value:'定价表的中间卡片'},{key:'视觉指令',value:'增加容器高度并添加投影，同时缩小相邻卡片。'},{key:'UI/UX 词汇',value:'视觉层级、容器、阴影'}]),p('可以持续使用这个公式：找到一个改动，写出包含 UI/UX 关键词的定向提示词，然后生成。')]),
 S('编辑主题与制作原型',[p('选择屏幕并点击 Generate → Edit Theme，可调整浅色/深色、强调色、圆角和字体。调整满意后选择 Generate → Prototype，生成可滚动、可交互的原型，检查悬停状态、输入框尺寸与真实使用场景。')]),
 S('下载代码与图片',[p('Stitch 同时生成图片和 HTML 代码。选择一个或多个屏幕后点击下载，得到 ZIP 文件，再接入 React、Angular、Vue、Jetpack Compose、Flutter 或 SwiftUI 等技术。')]),
 S('持续构思，持续创造',[p('更好的结果来自有效提示词与反复构思。一直迭代，直到设计真正符合你的目标。')])
],link('/docs/learn/prompting/','高效提示词')),
P('/docs/learn/prompting/','学习','高效提示词','通过有效的提示词与屏幕级迭代，稳定地获得更好的设计结果。',[
 S('从项目开始',[p('可以从宽泛概念开始，也可以直接描述细节。复杂应用建议先定高层方向，再按屏幕逐步深入。'),image('assets/images/effective-prompting@2x.png','高效提示词示例','高效提示词示例')]),
 S('高层提示词与详细提示词',[p('先从通用想法开始，再补充核心功能。'),prompt([{key:'高层',value:'一个为马拉松跑者设计的应用。'}]),prompt([{key:'详细',value:'一个帮助马拉松跑者加入社区、寻找伙伴、获得训练建议并发现附近赛事的应用。'}])]),
 S('用形容词设定气质',[p('使用形容词影响颜色、字体与图片风格。'),prompt([{key:'氛围',value:'充满活力、鼓舞人心的健身追踪应用。'}]),prompt([{key:'氛围',value:'极简、专注的冥想应用。'}])]),
 S('逐屏迭代应用',[p('Stitch 最适合清晰、具体的指令。每次只聚焦一个屏幕或组件，并完成一到两个改动。'),prompt([{key:'目标元素',value:'登录屏幕的主 CTA 按钮'},{key:'具体改变',value:'放大按钮，使用品牌主蓝色。'}])]),
 S('描述希望出现的图片',[p('用内容和视觉风格描述图片，例如：为「Suburban Legends」音乐播放器设计页面，专辑封面是一张放大的海水微距照片，页面背景与图片呼应。')]),
 S('控制应用主题',[p('可以指定颜色，也可以描述色彩情绪。'),list(['指定颜色：将主色改为森林绿。','情绪化颜色：更新为温暖、亲切的配色。','字体：使用活泼的无衬线字体，或把标题改为衬线字体。','边框与按钮：让按钮完全圆角，输入框使用 2px 实线黑色边框。'])]),
 S('修改设计中的图片',[p('明确指出页面、人物或产品，再说明要改变的视觉内容。'),prompt([{key:'定位',value:'在「团队」页面找到「Carter 医生（首席牙医）」的图片。'},{key:'指令',value:'把她的实验服改成黑色。'}]),p('如果同时修改主题颜色，要明确图片和插画图标也需要与新色系保持一致。')]),
 S('修改应用文案语言',[prompt([{key:'提示词',value:'将所有产品文案和按钮文字切换为中文。'}])]),
 S('Stitch 实用技巧',[list(['清晰简洁：避免含糊的词语。','持续迭代：用后续提示词逐步调整。','一次一个主要改动：更容易观察影响。','使用 UI/UX 关键词：如导航栏、CTA 按钮、卡片布局。','具体引用元素：如注册表单中的主按钮。','检查并重写：结果不对时，重新描述目标与视觉变化。'])])
],link('/docs/learn/device-types/','设备类型'),link('/docs/learn/overview/','使用 Stitch 设计所需的一切')),
P('/docs/learn/device-types/','学习','设备类型','了解 Stitch 的网页、移动端与自定义画布模式，并在迭代时切换输出形态。',[
 S('选择合适的设备',[p('生成前选择 Web 或 App。网页适合桌面与响应式布局，App 适合移动交互与原生导航。先凭直觉选择，后续仍可转换。')]),
 S('网页模式',[list(['适合落地页、仪表盘、内容站与营销页面。','默认关注桌面宽度，也会生成可响应布局。','提示词中可以补充断点、导航和滚动行为。'])]),
 S('应用模式',[list(['适合移动端任务流、列表、表单和底部导航。','描述手势、键盘和安全区域等移动交互。','可先生成单个屏幕，再逐步补全流程。'])]),
 S('切换设备类型',[p('选择屏幕后使用生成面板中的设备切换选项。转换时要重新检查间距、字号、导航模式和图片比例。')]),
 S('提示词示例',[prompt([{key:'目标',value:'一个适用于手机的习惯追踪应用。'},{key:'交互',value:'底部四项导航、可滑动打卡卡片、适合单手操作。'},{key:'设备',value:'iPhone 竖屏，顶部避开安全区域。'}])])
],link('/docs/learn/design-modes/','设计模式'),link('/docs/learn/prompting/','高效提示词')),
P('/docs/learn/design-modes/','学习','设计模式','理解 Stitch 的快速、精确与主题编辑模式，让每一次迭代都更可控。',[
 S('从模式开始',[p('不同模式对应不同阶段：快速模式用于探索方向，精确模式用于锁定布局与组件，主题编辑用于一次性调整全局视觉规则。'),image('https://stitch.withgoogle.com/docs/design-modes-pink-swoosh@2x.png','Stitch 设计模式','Stitch 设计模式')]),
 S('快速生成',[list(['适合空白页面和概念探索。','优先验证信息架构、内容层级和整体气质。','一次生成多个方向，再挑选值得深化的版本。'])]),
 S('精确编辑',[list(['针对单个屏幕或组件下达定向指令。','明确目标、位置、尺寸、颜色与行为。','尽量一次只改一个主要视觉问题。'])]),
 S('编辑主题',[p('从 Generate → Edit Theme 进入主题面板，可调整浅色/深色、品牌强调色、组件圆角、字体与整体密度。主题修改适合处理跨组件的一致性问题。')]),
 S('推荐工作流',[p('先快速生成，再精确编辑，最后通过主题编辑完成统一。每次改动后都检查对比图和交互原型。')])
],link('/docs/learn/variants/','生成设计变体'),link('/docs/learn/device-types/','设备类型')),
P('/docs/learn/variants/','学习','生成设计变体','从同一概念快速探索多个视觉方向，再选择一个继续迭代。',[
 S('什么时候生成变体',[p('当信息架构已经明确，但视觉方向尚未确定时，变体比反复重写同一个提示词更高效。')]),
 S('定义变化轴',[list(['布局：单列、双列、杂志式或密集仪表盘。','气质：克制、明快、专业或实验性。','主题：浅色/深色、圆角/直角、暖色/冷色。','内容：同一结构替换不同图片、文案或数据。'])]),
 S('变体提示词',[prompt([{key:'基础',value:'一个面向独立创作者的作品集网站。'},{key:'方向 A',value:'编辑式杂志布局，大标题、黑白图片和荧光绿强调色。'},{key:'方向 B',value:'安静的画廊布局，米白背景、衬线标题和细边框。'}])]),
 S('比较并收敛',[p('把变体并排比较，记录你要保留的结构、组件与视觉细节，然后只对选中的屏幕做精确迭代。')])
],link('/docs/learn/controls/','控制与快捷键'),link('/docs/learn/design-modes/','设计模式')),
P('/docs/learn/controls/','学习','控制与快捷键','在大型画布上快速选择、平移、缩放并切换屏幕。',[
 S('选择与导航',[table(['操作','快捷键','用途'],[['选择工具','V','选择屏幕或组件'],['平移工具','H','拖动画布快速导航'],['回到最近屏幕','⌘← / Ctrl+←','将视图定位到最近屏幕'],['下一个屏幕','⌘→ / Ctrl+→','按顺序查看屏幕'],['快捷键面板','?','显示全部快捷键']])]),
 S('画布操作',[p('按住空格也可以临时平移画布；滚轮或触控板用于缩放。画布很大时，优先使用回到最近屏幕快捷键，避免迷失位置。')]),
 S('选择屏幕后操作',[list(['点击 Edit 并通过聊天进行有针对性的修改。','点击 Generate → Edit Theme 修改全局主题。','点击 Generate → Prototype 检查交互状态。','选择多个屏幕后点击下载导出代码和图片。'])])
],null,link('/docs/learn/variants/','生成设计变体'))
];

const mcp=[
P('/docs/mcp/setup/','MCP','通过 MCP 使用 Stitch','通过 Model Context Protocol 将 IDE 与 CLI 连接到 Stitch 项目。',[
 S('理解远程 MCP',[p('许多 MCP 服务运行在本地，读取硬盘文件或执行本机脚本。Stitch 是运行在云端的远程 MCP 服务，因此需要安全握手，确认代表你操作的 AI 代理拥有修改设计的权限。')]),
 S('API Key 与 OAuth',[p('Stitch MCP 支持两种认证方式：API Key 是在 Stitch Settings 中生成的持久密钥；OAuth 是浏览器登录流程，适用于不支持手动输入密钥的客户端或不允许将密钥保存到磁盘的环境。'),table(['场景','API Key','OAuth'],[['客户端支持','Cursor、Antigravity、Gemini CLI 能读取配置文件或环境变量。','工具只提供 Sign In 登录流程。'],['存储策略','私有机器上使用 `.json` 或 `.env` 保存密钥。','零信任或临时环境禁止保存持久密钥。'],['撤销方式','从 Settings 删除密钥，并同步清理本地文件。','在 Settings 中退出登录即可失效。']])]),
 S('创建 API Key',[list(['打开 Stitch Settings 页面。','滚动到 API Keys 区域。','点击 Create API Key。','复制密钥并保存到安全位置。'])]),
 S('安全保存密钥',[callout('永远不要把 API Key 放在公开位置、提交到公开仓库，或写进他人可查看的客户端代码。')]),
 S('配置 MCP 客户端',[p('将远程地址和密钥填入你的 MCP 客户端配置。不同客户端的字段名略有不同，但核心是 `url`、`Authorization` 和环境变量。'),code('{\n  "mcpServers": {\n    "stitch": {\n      "url": "https://stitch.withgoogle.com/mcp",\n      "headers": { "X-Goog-Api-Key": "${STITCH_API_KEY}" }\n    }\n  }\n}','MCP 配置')]),
 S('验证连接',[prompt([{key:'指令',value:'列出我的 Stitch 项目。'}]),p('如果返回项目列表或空列表，连接成功。若出现错误，检查 MCP 服务是否运行、API Key 是否有效，以及客户端是否加载了最新配置。')])
],link('/docs/mcp/guide/','MCP 使用指南')),
P('/docs/mcp/guide/','MCP','MCP 使用指南','从项目发现到屏幕生成，了解 Stitch MCP 工具如何组成可重复的设计工作流。',[
 S('核心工具',[table(['工具','用途'],[['list_projects','列出可访问的 Stitch 项目。'],['get_project','读取项目元数据与屏幕列表。'],['generate_screen_from_text','根据结构化提示词生成屏幕。'],['get_screen','获取屏幕详情、截图与 HTML。'],['edit_screen','对已有屏幕进行一次定向修改。'],['download_artifacts','下载图片、HTML 和设计资源。']])]),
 S('从项目开始',[code('list_projects()\nget_project(project_id="project_123")','示例调用'),p('先读取项目状态，再把返回的项目 ID 传给生成与编辑工具。')]),
 S('生成屏幕',[code('generate_screen_from_text(\n  project_id="project_123",\n  prompt="为独立咖啡店生成一个温暖、易用的移动点单首页",\n  device_type="MOBILE"\n)','示例调用'),p('生成过程通常需要数秒到几十秒。保存返回的 screen_id，后续编辑和下载都使用它。')]),
 S('建立迭代循环',[list(['生成一个可用的第一版。','读取屏幕截图与结构。','一次只提出一个主要改动。','用 get_screen 验证结果，再继续下一轮。'])])
],link('/docs/mcp/reference/','MCP 参考'),link('/docs/mcp/setup/','通过 MCP 使用 Stitch')),
P('/docs/mcp/reference/','MCP','MCP 工具参考','Stitch MCP 远程服务的工具、参数和返回值速查。',[
 S('请求通用字段',[table(['字段','说明'],[['project_id','目标 Stitch 项目的 ID。'],['screen_id','目标屏幕的 ID。'],['prompt','自然语言设计指令。'],['device_type','WEB、MOBILE 或指定设备。'],['format','导出格式，如 html、png。']])]),
 S('常见调用',[code('list_projects()\nget_screen(project_id, screen_id)\nedit_screen(project_id, screen_id, prompt)\ndownload_artifacts(project_id, screen_id, format="html")','工具示例')]),
 S('错误处理',[list(['401：认证缺失或 API Key 无效。','403：当前账号没有项目访问权限。','404：项目或屏幕 ID 不存在。','429：请求频率过高，请稍后重试。','5xx：服务端暂时不可用，保留请求参数后重试。'])])
],null,link('/docs/mcp/guide/','MCP 使用指南'))
];

const sdk=[
P('/docs/sdk/tutorial/','SDK','构建你的第一个设计','使用 Stitch SDK 创建项目、生成屏幕，并把结果带回开发环境。',[
 S('安装与认证',[code('npm install @google/stitch-sdk\n$env:STITCH_API_KEY="你的密钥"','PowerShell')]),
 S('创建客户端',[code('import { Stitch } from "@google/stitch-sdk";\n\nconst stitch = new Stitch({\n  apiKey: process.env.STITCH_API_KEY\n});\n\nconst project = await stitch.projects.create({\n  name: "我的第一个 Stitch 项目"\n});','JavaScript')]),
 S('生成第一个屏幕',[code('const screen = await stitch.screens.generate({\n  projectId: project.id,\n  prompt: "一个面向跑者的训练首页，深色主题、清晰的数据卡片和底部导航",\n  deviceType: "MOBILE"\n});\nconsole.log(screen.id);','JavaScript')]),
 S('下一步',[list(['编辑已有屏幕与生成变体。','下载 HTML、图片和设计资源。','提取主题并建立可复用设计系统。','接入 Vercel AI SDK 或自定义代理工作流。'])])
],link('/docs/sdk/ai-sdk/','使用 AI SDK')),
P('/docs/sdk/ai-sdk/','SDK','使用 AI SDK','将 Stitch SDK 与 Vercel AI SDK 结合，让你的代理负责组织上下文和调用设计工具。',[
 S('为什么组合使用',[p('AI SDK 处理模型流式输出、工具调用和会话状态；Stitch SDK 负责项目、屏幕、主题与资源。两者组合后，可以把自然语言需求直接转成可审阅的设计资产。')]),
 S('定义工具',[code('import { tool } from "ai";\nimport { z } from "zod";\n\nconst generateStitchScreen = tool({\n  description: "在 Stitch 项目中生成一个屏幕",\n  parameters: z.object({ prompt: z.string() }),\n  execute: async ({ prompt }) => stitch.screens.generate({ projectId, prompt })\n});','TypeScript')]),
 S('流式运行代理',[code('const result = streamText({\n  model,\n  system: "你是一个会先澄清需求再调用 Stitch 的设计代理。",\n  prompt: userMessage,\n  tools: { generateStitchScreen }\n});','TypeScript')]),
 S('实践建议',[list(['在系统提示词中约束一次只改一个主要视觉问题。','将 projectId 和 API Key 保留在服务端。','把 screenId 写入会话，便于连续编辑。'])])
],link('/docs/sdk/agent-workflows/','代理工作流'),link('/docs/sdk/tutorial/','构建你的第一个设计')),
P('/docs/sdk/agent-workflows/','SDK','代理驱动的工作流','把发现、生成、审阅和导出串成可复用的自动化流程。',[
 S('标准循环',[code('发现项目 → 读取屏幕 → 生成或编辑 → 获取截图 → 请求人工审阅 → 导出资源','工作流')]),
 S('把设计任务拆成阶段',[list(['规划：把需求拆成页面、组件和状态。','生成：先生成最小可用屏幕。','校验：检查布局、可读性、移动端和交互状态。','收敛：保存明确的反馈，按优先级逐项修改。','交付：导出 HTML、图片和主题令牌。'])]),
 S('代理提示词模板',[prompt([{key:'角色',value:'你是一名严谨的产品设计代理。'},{key:'目标',value:'为当前项目生成或修改一个屏幕。'},{key:'约束',value:'保留现有主题；一次只做一个主要改动；先说明计划再调用工具。'},{key:'验收',value:'检查响应式布局、对比度和关键交互状态。'}])])
],link('/docs/sdk/edit-screen/','编辑屏幕'),link('/docs/sdk/ai-sdk/','使用 AI SDK')),
P('/docs/sdk/edit-screen/','SDK','如何编辑屏幕','在保留已有设计上下文的前提下，对一个屏幕做可控的局部修改。',[
 S('读取当前屏幕',[code('const current = await stitch.screens.get({ projectId, screenId });','JavaScript')]),
 S('写出定向改动',[p('告诉 Stitch 要改什么、在哪个屏幕或组件上改，以及希望看到的视觉结果。避免同时改变布局、主题和文案。'),prompt([{key:'屏幕',value:'登录页'},{key:'目标',value:'主 CTA 按钮'},{key:'改变',value:'增加高度，改为品牌蓝，并在悬停时提高亮度。'}])]),
 S('执行并验证',[code('const updated = await stitch.screens.edit({\n  projectId,\n  screenId,\n  prompt: "增加主 CTA 按钮高度，改为品牌蓝，并添加清晰的悬停状态"\n});\nconst review = await stitch.screens.get({ projectId, screenId });','JavaScript')]),
 S('避免无效迭代',[list(['不要一次请求多个互不相关的改动。','引用页面中的具体元素和位置。','当结果偏离时，先撤回到上一个版本再重写提示词。'])])
],link('/docs/sdk/generate-variants/','生成变体'),link('/docs/sdk/agent-workflows/','代理驱动的工作流')),
P('/docs/sdk/generate-variants/','SDK','如何生成设计变体','围绕相同产品需求生成多个布局与视觉方向，用于比较和收敛。',[
 S('生成多个方向',[code('const variants = await stitch.screens.generateVariants({\n  projectId,\n  screenId,\n  directions: [\n    "编辑式杂志布局，黑白与荧光绿",\n    "温暖画廊布局，米白与细边框",\n    "高密度数据仪表盘，深色与蓝色强调"\n  ]\n});','JavaScript')]),
 S('选择标准',[list(['信息层级是否一眼可见。','主要任务是否需要最少的操作。','颜色、字体和图片是否符合产品气质。','在目标设备上是否保持稳定的间距与比例。'])]),
 S('保留优点并继续编辑',[p('变体不是最终答案。选中最有潜力的方向，把其它方向中的优秀细节写进下一次定向提示词。')])
],link('/docs/sdk/download-artifacts/','下载资源'),link('/docs/sdk/edit-screen/','编辑屏幕')),
P('/docs/sdk/download-artifacts/','SDK','如何下载资源','下载生成屏幕的 HTML、图片、代码和相关设计资产。',[
 S('导出格式',[table(['格式','适用场景'],[['HTML','作为 React、Vue 或其他组件格式的转换基础。'],['PNG','视觉评审、设计走查和分享。'],['主题 JSON','在代码中复用颜色、字体和间距令牌。'],['ZIP','一次下载屏幕所需的完整资源。']])]),
 S('下载示例',[code('const artifact = await stitch.screens.downloadArtifacts({\n  projectId,\n  screenId,\n  formats: ["html", "png", "theme"]\n});\nawait artifact.save("./artifacts/home");','JavaScript')]),
 S('交付前检查',[list(['确认资源路径使用相对地址。','检查图片是否包含替代文字需求。','在目标框架中重新检查响应式断点。'])])
],link('/docs/sdk/extract-themes/','提取主题'),link('/docs/sdk/generate-variants/','生成变体')),
P('/docs/sdk/extract-themes/','SDK','如何提取主题','从已有屏幕中提取颜色、字体、圆角和间距，形成可复用的设计令牌。',[
 S('提取令牌',[code('const theme = await stitch.screens.extractTheme({\n  projectId,\n  screenId\n});','JavaScript')]),
 S('主题包含什么',[list(['颜色角色：主色、表面、文本、边框、错误和强调色。','排版：字体族、字号、字重、行高。','形状：圆角、边框粗细、阴影。','空间：基础间距和容器宽度。'])]),
 S('应用到代码',[code(':root {\n  --color-primary: #2665fd;\n  --color-surface: #0b1326;\n  --font-body: Inter, sans-serif;\n  --radius-md: 12px;\n}','CSS')]),
 S('保持一致',[p('提取后要人工校对颜色语义和可访问性，再把令牌放进项目的 DESIGN.md 或主题文件。')])
],link('/docs/sdk/design-systems/','管理设计系统'),link('/docs/sdk/download-artifacts/','下载资源')),
P('/docs/sdk/design-systems/','SDK','如何管理设计系统','创建、读取并复用 Stitch 项目中的设计系统，避免每个屏幕各自为政。',[
 S('设计系统的组成',[list(['颜色与语义角色。','字体、字号和排版层级。','按钮、输入框、卡片等组件规则。','布局、间距、圆角和阴影。'])]),
 S('创建与应用',[code('const system = await stitch.designSystems.create({\n  projectId,\n  name: "品牌设计系统",\n  sourceScreenId: screenId\n});\nawait stitch.designSystems.apply({ projectId, designSystemId: system.id });','JavaScript')]),
 S('版本策略',[p('在主题发生重大变化时建立新版本；小幅调整则保留令牌名称，只更新值。屏幕生成前先加载最新系统。')])
],link('/docs/sdk/upload-image/','上传文件'),link('/docs/sdk/extract-themes/','提取主题')),
P('/docs/sdk/upload-image/','SDK','如何上传文件','将参考图片与品牌素材安全地传入 Stitch，用于生成和编辑屏幕。',[
 S('上传参考图片',[code('const image = await stitch.assets.upload({\n  projectId,\n  file: "./references/brand-board.png",\n  purpose: "reference"\n});','JavaScript')]),
 S('在提示词中引用',[prompt([{key:'图片',value:'使用刚上传的品牌情绪板作为配色与图片构图参考。保留产品照片的真实比例，不要添加模糊或暗色滤镜。'}])]),
 S('安全与性能',[list(['只上传你拥有使用权的文件。','避免把个人或敏感文件传给第三方服务。','上传前压缩大图片，保持清晰度与合理体积。'])])
],link('/docs/sdk/reference/','SDK 参考'),link('/docs/sdk/design-systems/','管理设计系统')),
P('/docs/sdk/reference/','SDK','SDK 参考','Stitch SDK 的客户端、项目、屏幕、资源和主题 API 速查。',[
 S('客户端',[code('new Stitch({ apiKey })','JavaScript')]),
 S('资源分组',[table(['分组','主要方法'],[['projects','create、list、get、update'],['screens','generate、edit、get、generateVariants'],['artifacts','downloadArtifacts'],['themes','extractTheme、apply'],['assets','upload、list、delete']])]),
 S('返回值',[p('写操作返回资源 ID 与状态；读取操作返回可用于渲染、下载或继续编辑的结构化对象。生产环境请处理网络错误、速率限制与重试。')])
],link('/docs/sdk/architecture/','架构'),link('/docs/sdk/upload-image/','上传文件')),
P('/docs/sdk/architecture/','SDK','架构','了解 Stitch SDK 如何连接应用、代理与远程设计服务。',[
 S('分层结构',[list(['应用层：收集需求、显示预览和处理人工确认。','代理层：组织上下文、选择工具并编排迭代。','SDK 层：负责认证、请求、类型和错误处理。','Stitch 服务：生成屏幕、主题和导出资源。'])]),
 S('服务端边界',[callout('API Key 只应出现在服务端。浏览器端通过你自己的服务调用 Stitch，避免在客户端源码中暴露密钥。')]),
 S('可靠性',[p('为生成与下载操作设置超时和重试；保存 projectId、screenId、版本号和用户提示词，以便审计与恢复。')])
],null,link('/docs/sdk/reference/','SDK 参考'))
];

const design=[
P('/docs/design-md/overview/','DESIGN.md','什么是 DESIGN.md？','一份供 AI 代理读取的设计系统文档，让整个项目的界面保持一致。',[
 S('为什么需要它',[p('每个项目都有视觉身份：颜色、字体、间距和组件样式。它们通常藏在 Figma、品牌 PDF 或设计师的经验里，AI 代理无法直接读取。`DESIGN.md` 是人和代理都能读、改、执行的纯文本设计系统。')]),
 S('它定义什么',[table(['文件','读取者','定义内容'],[['README.md','人','项目是什么'],['AGENTS.md','编码代理','如何构建项目'],['DESIGN.md','设计代理','项目应该如何呈现']])]),
 S('它带来的结果',[p('当 Stitch 读取 DESIGN.md 时，每个屏幕都会遵循同一套颜色、排版和组件模式。它是会随设计一起演进的 living artifact，而不是一次性配置。')]),
 S('文件结构',[p('每份 DESIGN.md 有两层：包含精确设计令牌的 YAML front matter，以及解释设计原因的 Markdown 正文。令牌告诉代理使用什么值，文字说明为什么使用这些值。')]),
 S('三种创建方式',[image('https://stitch.withgoogle.com/docs/design-systems-design-md.png','从 Stitch 生成 DESIGN.md','从 Stitch 生成 DESIGN.md'),list(['让代理根据一句气质描述自动生成。','提供网站 URL 或图片，从已有品牌提取。','手写 Markdown 与 YAML，精确控制每个令牌。']),image('https://stitch.withgoogle.com/docs/design-systems-create.png','通过提示词创建设计系统','通过提示词创建设计系统'),prompt([{key:'提示词',value:'一个温暖、圆角、友好的手作咖啡店点单应用。'}]),image('https://stitch.withgoogle.com/docs/design-system-import-from-website.png','从网站导入设计系统','从网站导入设计系统')]),
 S('最小示例',[code('---\nname: DevFocus Dark\ncolors:\n  primary: "#2665fd"\n  surface: "#0b1326"\n  on-surface: "#dae2fd"\ntypography:\n  body-md:\n    fontFamily: Inter\n    fontSize: 16px\n    fontWeight: 400\n---\n\n# Design intent\nUse a focused dark workspace with clear blue actions.','DESIGN.md')])
],link('/docs/design-md/get-instructions/','从代码库导入')),
P('/docs/design-md/get-instructions/','DESIGN.md','从代码库导入','从现有网站或应用代码中提取视觉规则，生成一份 DESIGN.md。',[
 S('准备工作',[p('确保项目中包含代表性页面、全局样式、主题令牌和常用组件。导入越接近真实产品，提取的设计系统越可靠。')]),
 S('让 Stitch 读取项目',[code('npx stitch design-md extract . --output DESIGN.md','终端')]),
 S('提取内容',[list(['从 CSS、Tailwind 配置或主题文件中读取颜色。','从字体声明和排版类中识别文字层级。','从按钮、卡片和输入框中归纳组件模式。','从布局工具中提取间距与容器规则。'])]),
 S('导入网站 URL',[prompt([{key:'任务',value:'从 https://example.com 提取品牌色、排版、圆角和组件样式，生成 DESIGN.md。'}]),p('导入后人工确认图片、动态状态和无障碍规则，再提交到项目根目录。')])
],link('/docs/design-md/specification/','规范'),link('/docs/design-md/overview/','什么是 DESIGN.md？')),
P('/docs/design-md/specification/','DESIGN.md','DESIGN.md 规范','了解文件的 front matter、令牌命名与 Markdown 正文结构。',[
 S('YAML front matter',[p('用 `---` 包裹机器可读令牌。推荐包含 name、colors、typography、spacing、radius 和 elevation。未知字段可以保留，工具应当向后兼容。')]),
 S('令牌示例',[code('---\nname: Brand Light\ncolors:\n  primary: "#1d4ed8"\n  surface: "#ffffff"\n  on-surface: "#111827"\nspacing:\n  unit: 4px\nradius:\n  md: 10px\n---','YAML')]),
 S('Markdown 正文',[p('正文解释设计意图、使用场景、禁用方式和组件语义。用标题组织章节，使用标准 Markdown，不依赖私有语法。')]),
 S('扩展规则',[callout('规范提供共同基础，而不是限制。自定义令牌和领域专属章节可以扩展，只要不破坏已有字段的语义。')])
],link('/docs/design-md/usage/','查看、编辑与导出'),link('/docs/design-md/get-instructions/','从代码库导入')),
P('/docs/design-md/usage/','DESIGN.md','查看、编辑与导出','在 Stitch 中查看和调整设计系统，再将最终版本带回代码库。',[
 S('查看设计系统',[p('打开项目后选择 DESIGN.md，浏览颜色、排版、组件和间距。每个令牌都应能追溯到实际屏幕中的用法。')]),
 S('编辑令牌',[list(['优先修改语义角色，而不是单个组件的硬编码值。','保持令牌命名稳定，避免让代码和文档失去对应关系。','每次修改后重新生成一个代表性屏幕进行验证。'])]),
 S('导出文件',[code('npx stitch design-md export --project project_123 --out ./DESIGN.md','终端')]),
 S('应用到新屏幕',[p('把 DESIGN.md 放在项目根目录，并在生成提示词中明确要求代理遵循它。')])
],link('/docs/design-md/cli/','使用 CLI 校验'),link('/docs/design-md/specification/','DESIGN.md 规范')),
P('/docs/design-md/cli/','DESIGN.md','使用 CLI 校验','在提交前检查 DESIGN.md 的格式、令牌和必填章节。',[
 S('安装 CLI',[code('npm install -g @google/stitch-cli','终端')]),
 S('运行校验',[code('stitch design-md lint DESIGN.md','终端')]),
 S('修复问题',[table(['问题','处理方式'],[['YAML 解析失败','检查缩进、引号和 front matter 分隔线。'],['颜色格式错误','使用完整的十六进制或 CSS 颜色值。'],['令牌缺少语义','为颜色和间距补充用途说明。'],['未知字段警告','确认拼写；自定义字段可保留但要写清用途。']])]),
 S('持续集成',[code('stitch design-md lint DESIGN.md && npm test','CI 示例'),p('把 lint 加入 CI，在设计系统变更进入主分支前阻止格式错误。')])
],link('/docs/design-md/linting-rules/','Lint 规则'),link('/docs/design-md/usage/','查看、编辑与导出')),
P('/docs/design-md/linting-rules/','DESIGN.md','Lint 规则','一份面向团队的 DESIGN.md 质量检查清单。',[
 S('基础规则',[list(['front matter 必须使用有效 YAML。','颜色、字号、间距与圆角使用稳定格式。','令牌名采用小写短横线或项目既有命名规范。','正文中的章节标题与令牌保持一致。'])]),
 S('可维护性规则',[list(['避免把页面名称当作颜色令牌。','为重复组件抽取共享令牌。','删除已经不再使用的临时令牌。','把设计原因写在正文中，方便代理理解。'])]),
 S('审阅清单',[callout('Lint 通过只是格式正确，不代表设计合理。仍需检查对比度、键盘操作、响应式布局和真实文案长度。')])
],null,link('/docs/design-md/cli/','使用 CLI 校验'))
];

const skills=[
P('/docs/skills/get-started/','Agent Skills','开始使用 Agent Skills','安装 Stitch Design Skills、连接 MCP，并通过编码代理生成你的第一块屏幕。',[
 S('安装插件套件',[code('npx plugins add google-labs-code/stitch-skills --scope project --target claude-code','终端'),p('这会安装 stitch-design、stitch-build、stitch-utilities 三个插件，共 13 个技能。')]),
 S('选择代理目标',[code('# Claude Code\nnpx plugins add google-labs-code/stitch-skills --scope project --target claude-code\n# Cursor\nnpx plugins add google-labs-code/stitch-skills --scope project --target cursor\n# Gemini CLI\nnpx plugins add google-labs-code/stitch-skills --scope project --target gemini-cli','终端')]),
 S('连接 Stitch MCP',[p('按照 MCP Setup 指南注册服务并配置 API 凭证。连接后，代理可以调用 `list_projects`、`generate_screen_from_text` 和 `get_screen` 等工具。'),prompt([{key:'验证',value:'列出我的 Stitch 项目。'}])]),
 S('生成第一块屏幕',[prompt([{key:'增强',value:'Enhance this prompt for Stitch: “Create a landing page for an artisanal coffee shop”'}]),p('增强技能会补充平台规格、编号章节、具体 UI/UX 关键词和设计系统色彩角色。然后执行：'),prompt([{key:'生成',value:'使用上一步增强后的提示词，在我的 Stitch 项目中生成一个屏幕。'}])]),
 S('下一步',[list(['从代码库导入：提取 DESIGN.md。','Code to Design roundtrip：导入 React 应用并导出回组件。','Build in a loop：从单一概念生成完整网站。','Skill reference：查看全部 13 个技能。'])])
],link('/docs/skills/roundtrip/','Code to Design 往返')),
P('/docs/skills/roundtrip/','Agent Skills','Code to Design 往返','在代码与 Stitch 设计之间来回同步，保持实现和视觉系统一致。',[
 S('从代码到设计',[list(['读取项目结构、路由和现有组件。','提取颜色、排版、间距与组件规则。','生成 DESIGN.md 并导入 Stitch。','截图或导出代表性页面进行对照。'])]),
 S('从设计回到代码',[p('在 Stitch 中修改屏幕后，下载 HTML 与图片，把它们转换为项目使用的 React、Vue 或其他组件。保留现有数据与业务逻辑，只替换呈现层。')]),
 S('往返检查',[table(['检查项','问题'],[['结构','页面层级和路由是否仍然匹配？'],['主题','颜色和字体令牌是否回写到统一主题？'],['交互','原型中的状态是否在组件中实现？'],['资源','图片路径与替代文字是否正确？']])])
],link('/docs/skills/build-in-a-loop/','循环构建'),link('/docs/skills/get-started/','开始使用 Agent Skills')),
P('/docs/skills/build-in-a-loop/','Agent Skills','循环构建','把一个产品概念拆成页面、状态与组件，连续生成并审阅整个网站。',[
 S('建立页面地图',[prompt([{key:'产品',value:'一个帮助独立创作者管理委托项目的工作台。'},{key:'页面',value:'总览、项目详情、客户列表、账单和设置。'},{key:'风格',value:'安静、专业、密集但有清晰层级。'}])]),
 S('按循环推进',[list(['先生成总览页，验证主题和主要导航。','生成下一个屏幕时复用 DESIGN.md。','每轮只修改一个主要问题。','完成页面后再连接交互状态和真实文案。'])]),
 S('收敛到交付',[p('让代理维护页面清单与完成状态。每次循环都保存截图、提示词和变更摘要，最后统一下载代码与图片。')])
],link('/docs/skills/walkthrough-videos/','生成演示视频'),link('/docs/skills/roundtrip/','Code to Design 往返')),
P('/docs/skills/walkthrough-videos/','Agent Skills','生成演示视频','从已完成的屏幕和原型生成清晰的产品演示视频。',[
 S('准备素材',[list(['完成关键页面并确认导航顺序。','为主要按钮和输入框准备可操作状态。','删除不必要的占位文案和调试元素。'])]),
 S('生成脚本',[prompt([{key:'目标',value:'生成一个 45 秒的产品演示。'},{key:'流程',value:'打开首页 → 创建项目 → 查看详情 → 标记任务完成。'},{key:'节奏',value:'每个状态停留足够时间，转场克制，不添加无关装饰。'}])]),
 S('审阅视频',[p('检查文字是否可读、光标和点击位置是否准确、移动端画面是否被裁切。视频应展示实际产品状态，而不是只播放静态截图。')])
],link('/docs/skills/taste/','Taste'),link('/docs/skills/build-in-a-loop/','循环构建')),
P('/docs/skills/taste/','Agent Skills','Taste','让代理在生成设计时保持清晰的视觉判断，而不是堆叠流行样式。',[
 S('设计判断的优先级',[list(['先解决信息层级与任务路径。','再统一颜色、字体和组件语义。','最后处理装饰、动效和个性化细节。'])]),
 S('避免通用 AI 视觉',[p('不要默认使用紫色渐变、过大的 Hero、重复卡片或没有上下文的装饰。设计应服务产品受众、内容密度和真实使用场景。')]),
 S('质量提示词',[prompt([{key:'约束',value:'保持克制的工业感；使用不超过两种强调色；避免渐变球体和无意义的玻璃卡片。'},{key:'验收',value:'检查对比度、可读性、响应式布局和组件状态。'}])])
],link('/docs/skills/reference/','技能参考'),link('/docs/skills/walkthrough-videos/','生成演示视频')),
P('/docs/skills/reference/','Agent Skills','技能参考','Stitch Skills 的完整目录与使用场景。',[
 S('stitch-design',[table(['技能','用途'],[['enhance-prompt','把模糊想法改写为可生成的结构化提示词。'],['code-to-design','从现有代码生成 Stitch 设计。'],['extract-design-md','从代码或网站提取 DESIGN.md。'],['upload-to-stitch','上传图片、代码和参考资源。']])]),
 S('stitch-build',[table(['技能','用途'],[['build-in-a-loop','循环生成多页面网站。'],['generate-screen','生成单个屏幕。'],['edit-screen','对屏幕做定向修改。'],['generate-variants','批量探索设计方向。'],['walkthrough-videos','生成演示视频。']])]),
 S('stitch-utilities',[list(['下载资源、检查主题、校验文件和整理上下文。很多技能依赖彼此，完整安装插件套件是更稳妥的选择。'])]),
 S('选择技能',[code('npx skills add google-labs-code/stitch-skills','终端')])
],null,link('/docs/skills/taste/','Taste'))
];

const all=[...learn,...mcp,...sdk,...design,...skills];
const DOC_PAGES=Object.fromEntries(all.map(page=>[page.path,page]));
const DOC_SECTIONS={learn:{label:'Learn · 学习',pages:learn},mcp:{label:'MCP · 连接',pages:mcp},sdk:{label:'SDK · 开发',pages:sdk},design:{label:'DESIGN.md · 规范',pages:design},skills:{label:'Agent Skills · 代理技能',pages:skills}};
