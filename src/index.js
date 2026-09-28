function finite(v,n){if(typeof v!=="number"||!Number.isFinite(v))throw new TypeError(`Expected ${n} to be finite`);}
export function lerp(a,b,t){finite(a,"a");finite(b,"b");finite(t,"t");return a+(b-a)*t;}
export function inverseLerp(a,b,v){finite(a,"a");finite(b,"b");finite(v,"value");return a===b?0:(v-a)/(b-a);}
export function remap(v,a,b,c,d){return lerp(c,d,inverseLerp(a,b,v));}
