
        const studentForm = document.getElementById("studentForm");
        const studentList = document.getElementById("studentList");

        studentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(studentForm);
            const student = {
                name: formData.get("name").trim(),
                age: formData.get("age"),
                course: formData.get("course"),
                gender: formData.get("gender"),
                email: formData.get("email").trim()
            };

            const row = document.createElement("tr");
            [student.name, student.age, student.course, student.gender, student.email].forEach(function (value) {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-button";
            deleteButton.textContent = "Delete";
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);
            studentList.appendChild(row);

            studentForm.reset();
        });

        studentList.addEventListener("click", function (event) {
            if (event.target.matches(".delete-button")) {
                event.target.closest("tr").remove();
            }
        });

