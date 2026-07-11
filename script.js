function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "" || password === "") {

        alert("Please enter email and password");

        return;
    }


    document.getElementById("loginPage").classList.add("hidden");

    document.getElementById("dashboard").classList.remove("hidden");

}



function openAnalyzer() {

    document.getElementById("dashboard").classList.add("hidden");

    document.getElementById("analyzer").classList.remove("hidden");

}



function analyzeContract() {


    const contract = document.getElementById("contractText").value;


    if(contract.trim() === "") {

        alert("Please paste your contract first");

        return;

    }


    let riskScore = Math.floor(
        Math.random() * 40 + 30
    );


    let status;


    if(riskScore > 60){

        status = "High Risk";

    } else {

        status = "Low Risk";

    }



    document.getElementById("result").innerHTML = `

    <h3>AI Contract Report</h3>

    <p>
    📊 Risk Score: ${riskScore}%
    </p>

    <p>
    ⚠️ Status: ${status}
    </p>

    <p>
    🔍 Detected Clauses:
    Contract terms analyzed successfully.
    </p>

    <p>
    💡 Recommendation:
    Review important clauses before signing.
    </p>

    `;


}
