
const button = document.getElementById('theme-toggle');
const Icon = document.getElementById('icon');
const section = document.querySelectorAll('.lblack');
const output = document.getElementById('output');
const input = document.getElementById('input');
const container = document.getElementById('section');
const newlabel = document.createElement('label');
const newinput = document.createElement('input');
const newspan = document.createElement('span');
const newtrash = document.createElement('i');
let total = 0;
let completed = 0;
newinput.setAttribute('type', 'checkbox');
newlabel.classList.add('m-3', 'relative', 'has-[:checked]:order-last', 'border-gray-400', 'z-20', 'border', 'flex', 'gap-3', 'items-center', 'p-3', 'rounded-lg');
newinput.classList.add('peer', 'z-20', 'accent-[#7385c7]', 'rounded-sm', 'border-gray-400', 'bottom-0', 'appearance-none', 'h-4', 'w-4', 'border', 'checked:appearance-auto');
newspan.classList.add('peer-checked:line-through', 'z-20', 'peer-checked:text-gray-400', 'flex-1', 'overflow-auto', 'mr-7');
newtrash.classList.add('cursor-pointer', 'trash', 'ph', 'ph-trash', 'hidden', 'items-center', 'justify-center', 'absolute', 'right-0', 'bg-red-700', 'w-10', 'rounded-r-md', 'text-white', 'h-full', 'text-xl');
newlabel.appendChild(newinput);
newlabel.appendChild(newtrash);
newlabel.appendChild(newspan);
let clases = {};

button.addEventListener('click', () => {
    Icon.classList.toggle('ph-sun');
    document.body.classList.toggle('bg-[#181824]');
    document.body.classList.toggle('text-white');
    section.forEach((section) => {
        section.classList.toggle('bg-[#25273E]');
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        if (input.value === '') {
            return;
        }
        else {
            newspan.textContent = input.value;
            container.appendChild(newlabel.cloneNode(true));
            input.value = '';
            total++;
            output.textContent = `${completed}/${total}`;
        }
    }
});
document.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        if (event.target.checked) {
            completed++;
        }
        else {
            completed--;
        }
        output.textContent = `${completed}/${total}`;
    }
});
function trash()
{
    const trash = document.querySelectorAll('.trash');
    const tr = document.getElementById('tr');
    if (trash.length === 0){
        return;
    }
    tr.classList.toggle('ph-trash');
    tr.classList.toggle('ph-x');
    trash.forEach((trash) => {
        trash.classList.toggle('hidden');
        trash.classList.toggle('flex');
        trash.addEventListener('click', function() {
            trash.parentElement.remove();
            total--;
            if (trash.previousElementSibling.checked){
                completed--;
            }
            output.textContent = `${completed}/${total}`;
            if (total === 0){
                tr.classList.toggle('ph-trash');
                tr.classList.toggle('ph-x');
            }
        });
    });
}