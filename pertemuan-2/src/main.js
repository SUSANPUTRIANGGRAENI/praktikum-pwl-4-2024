let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }

   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm`;
   task.innerHTML = `
      <p class="text-gray-800">${title}</p>
      <div class="flex space-x-2">
         <input type="button" id="btn-selesai-${task.id}" value="SELESAI" data-task="${task.id}"
            class="bg-blue-400 text-black px-3 py-1 rounded-lg hover:bg-blue-600 cursor-pointer">
         <input type="button" id="btn-hapus-${task.id}" value="HAPUS" data-task="${task.id}"
            class="bg-red-400 text-black px-3 py-1 rounded-lg hover:bg-red-600 cursor-pointer">
      </div>
   `;

   output.appendChild(task);
   input.value = "";

   document.getElementById(`btn-selesai-${task.id}`).onclick = function () {
      let taskText = task.querySelector('p');
      taskText.classList.toggle('line-through');
      taskText.classList.toggle('text-gray-500');
   };

   document.getElementById(`btn-hapus-${task.id}`).onclick = function () {
      task.remove();
   };

   e.preventDefault();
}
