const tools=[
{name:"ChatGPT",cat:"Writing",desc:"Conversational AI for brainstorming, drafting, learning and everyday tasks.",url:"https://chatgpt.com/"},
{name:"Google Gemini",cat:"Productivity",desc:"AI assistant for writing, ideas, research and productivity workflows.",url:"https://gemini.google.com/"},
{name:"Claude",cat:"Writing",desc:"AI assistant useful for writing, analysis, reasoning and document work.",url:"https://claude.ai/"},
{name:"Canva",cat:"Image",desc:"Design platform with AI-powered features for visual content.",url:"https://www.canva.com/"},
{name:"Perplexity",cat:"Research",desc:"AI-powered search and research assistant with cited answers.",url:"https://www.perplexity.ai/"},
{name:"GitHub Copilot",cat:"Coding",desc:"AI coding assistant designed to help developers write and understand code.",url:"https://github.com/features/copilot"},
{name:"NotebookLM",cat:"Education",desc:"Research and study assistant that works with sources you provide.",url:"https://notebooklm.google.com/"},
{name:"CapCut",cat:"Video",desc:"Video editor with AI-powered tools for creating and editing content.",url:"https://www.capcut.com/"}
];
const grid=document.querySelector("#toolGrid"), search=document.querySelector("#search"), empty=document.querySelector("#empty");
function render(q=""){const x=tools.filter(t=>(t.name+" "+t.cat+" "+t.desc).toLowerCase().includes(q.toLowerCase()));grid.innerHTML=x.map(t=>`<article class="tool"><span class="tag">${t.cat.toUpperCase()}</span><h3>${t.name}</h3><p>${t.desc}</p><a href="${t.url}" target="_blank" rel="noopener">Visit official site →</a></article>`).join("");empty.hidden=x.length>0}
search?.addEventListener("input",e=>render(e.target.value));
document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>{search.value=a.dataset.filter;render(a.dataset.filter)}));
render();