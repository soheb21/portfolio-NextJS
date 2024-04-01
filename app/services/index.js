export async function addData(currentTab, formData) {
    try {
        const response = await fetch(`/api/${currentTab}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json();
        return result;

    } catch (e) {
        console.log("add-Data", e)
    }

}
export async function updateData(currentTab, formData) {
    try {
        const response = await fetch(`/api/${currentTab}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json();
        console.log({ result })
        return result;

    } catch (e) {
        console.log("update-Data", e)
    }

}
export async function getData(currentTab) {
    try {
        const response = await fetch(`/api/${currentTab}/get`)
        const result = await response.json();
        return result;

    } catch (e) {
        console.log("get-Data", e)

    }

}
export async function loginData(formData) {
    try {

        const response = await fetch('/api/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json();
        return result;

    } catch (e) {
        console.log("Login-Data", e)

    }

}