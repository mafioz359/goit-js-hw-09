function e(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>t?n({position:e,delay:o}):i({position:e,delay:o})))}),o)}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const{target:t}=o,n=t.delay.value,i=t.step.value,l=t.amount.value;for(let o=0;o<l;o++){e(o+1,Number(n)+i*o).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.01fd5df6.js.map