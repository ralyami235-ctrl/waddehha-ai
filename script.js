function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "" || password === "") {

        alert("فضلاً أدخل البريد الإلكتروني وكلمة المرور");
        return;
    }

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

    const username = email.split("@")[0];

    document.querySelector("#dashboard h1").innerHTML =
    "👋 أهلًا " + username;

}




function openAnalyzer() {

    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("analyzer").classList.remove("hidden");

}





function analyzeContract() {


    const contract = document.getElementById("contractText").value.trim();


    if(contract === "") {

        alert("فضلاً الصق نص العقد أولاً");
        return;

    }


    let riskScore = 20;

    let clauses = [];
    let reasons = [];



    let durationMatch = contract.match(/(\d+)\s*(شهر|أشهر|سنة|سنوات)/);


    let duration = "غير محددة";


    if(durationMatch){

        duration = durationMatch[1] + " " + durationMatch[2];

        clauses.push("مدة العقد: " + duration);

    }




    if(
        contract.includes("إنهاء") ||
        contract.includes("فسخ") ||
        contract.includes("إلغاء")
    ){

        clauses.push("يوجد بند يسمح بإنهاء أو فسخ العقد");

        riskScore += 15;

        reasons.push("وجود بند يسمح بإنهاء العقد");

    }




    if(
        contract.includes("مسؤولية") ||
        contract.includes("يتحمل") ||
        contract.includes("يلتزم")
    ){

        clauses.push("تم العثور على التزامات ومسؤوليات بين الأطراف");

        riskScore += 10;

        reasons.push("تحميل أحد الأطراف مسؤوليات تحتاج إلى توضيح");

    }




    if(
        contract.includes("سرية") ||
        contract.includes("عدم الإفصاح")
    ){

        clauses.push("يوجد بند خاص بالسرية");

    }




    if(
        contract.includes("تحكيم") ||
        contract.includes("نزاع")
    ){

        clauses.push("يوجد بند لحل النزاعات");

    }




    if(riskScore > 100){

        riskScore = 100;

    }




    let status;


    if(riskScore >= 60){

        status = "خطورة مرتفعة";

    }
    else if(riskScore >= 40){

        status = "خطورة متوسطة";

    }
    else {

        status = "خطورة منخفضة";

    }




    if(reasons.length === 0){

        reasons.push("لم يتم اكتشاف مخاطر واضحة");

    }




    let summary = "عقد ";

    if(contract.includes("خدمات")){

        summary += "خدمات ";

    }

    summary += "لمدة " + duration +
    " بين طرفين، يتضمن التزامات وشروط تحتاج إلى مراجعة قبل التوقيع.";





    document.getElementById("result").innerHTML = `


    <h3>📄 تقرير تحليل العقد بالذكاء الاصطناعي</h3>


    <p>
    📊 درجة الخطورة: ${riskScore}%
    </p>


    <p>
    ⚠️ الحالة: ${status}
    </p>




    <h4>📄 ملخص العقد:</h4>

    <p>
    ${summary}
    </p>




    <h4>🔍 البنود المكتشفة:</h4>

    <ul>
    ${clauses.map(item => `<li>${item}</li>`).join("")}
    </ul>




    <h4>📌 أسباب درجة الخطورة:</h4>

    <ul>
    ${reasons.map(item => `<li>${item}</li>`).join("")}
    </ul>




    <h4>📝 ملاحظات إضافية:</h4>

    <ul>

    ${!contract.includes("سرية") ? 
    "<li>لم يتم العثور على بند سرية.</li>" : ""}

    ${!contract.includes("تحكيم") && !contract.includes("نزاع") ? 
    "<li>لم يتم العثور على بند واضح لحل النزاعات.</li>"
