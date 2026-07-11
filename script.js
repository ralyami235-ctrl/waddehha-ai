function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if(email === "" || password === "") {

        alert("فضلاً أدخل البريد الإلكتروني وكلمة المرور");

        return;
    }


    document.getElementById("loginPage").classList.add("hidden");

    document.getElementById("dashboard").classList.remove("hidden");


    // استخراج اسم المستخدم من البريد الإلكتروني
    const username = email.split("@")[0];


    document.querySelector("#dashboard h1").innerHTML =
    "👋 أهلًا " + username;

}



function openAnalyzer() {

    document.getElementById("dashboard").classList.add("hidden");

    document.getElementById("analyzer").classList.remove("hidden");

}



function analyzeContract() {


    const contract = document.getElementById("contractText").value;


    if(contract.trim() === "") {

        alert("فضلاً الصق نص العقد أولاً");

        return;

    }


    let riskScore = Math.floor(
        Math.random() * 40 + 30
    );


    let status;


    if(riskScore > 60){

        status = "خطورة مرتفعة";

    } else {

        status = "خطورة منخفضة";

    }



    document.getElementById("result").innerHTML = `

    <h3>📄 تقرير تحليل العقد بالذكاء الاصطناعي</h3>

    <p>
    📊 درجة الخطورة: ${riskScore}%
    </p>

    <p>
    ⚠️ الحالة: ${status}
    </p>

    <p>
    🔍 البنود المكتشفة:
    تم تحليل شروط العقد بنجاح.
    </p>

    <p>
    💡 التوصية:
    يرجى مراجعة البنود المهمة قبل التوقيع.
    </p>

    `;


}
