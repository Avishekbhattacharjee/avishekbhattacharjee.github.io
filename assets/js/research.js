/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Design the mathematical models in the MATLAB Simulator which executes ASK, FSK, and PSK",
    authors:
      "Avishek Bhattacharjee",
    conferences:
      "IEEE International Conference 2022",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Bhattacharjee, Avishek. (2022). Design the mathematical models in the MATLAB Simulator which executes ASK, FSK, and PSK. 10.13140/RG.2.2.25187.63527. ",
    },
    abstract:
      "This report will show you the process of drawing mathematical models using the MATLAB simulator and seeing the waveform responses. Open the MATLAB library in the MATLAB Simulink and search for the following things given on the MATLAB model: change the value by seeing the discussion; see the waveform responses on the scope.",
    absbox: "absPopup1",
  },

  {
    title: "Evolutions of Intel processors",
    authors:
      "Avishek Bhattacharjee, Tiyasha Ghosh",
    conferences:
      "Journal of Computational Science",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Ghosh, Tiyasha & Bhattacharjee, Avishek. (2022). Evolutions of Intel processors. Journal of Computational Science. 10.5281/zenodo.7236101.",
    },
    abstract:
      "In the 1950s, the idea of a computer processor was put forth and applied to computing power. Here, we examine the development of Intel's processors. It has been demonstrated that manufacturers alter the specifications, functionality, and capacity during the from old to new transition. It has a direct impact on the processing power and performance of the computer. Due to their widespread use and the availability of comprehensive descriptions of all technical specifications, Intel processors are utilised as the primary illustration.",
    absbox: "absPopup2",
  },

  {
    title:
      "Insulated Gate Bipolar Junction (IGBT)",
    authors: "Avishek Bhattacharjee",
    conferences:
      "HETC College CA2 Assignment",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "Bhattacharjee, Avishek. (2022). Insulated Gate Bipolar Junction (IGBT). 10.5281/zenodo.7038653.",
    },
    abstract:
      "IGBT (Insulated Gate Bipolar Junction) is the combination of MOSFET and BJT. It has low input impedance like MOSFET and less power loss like BJT. In order to achieve better on-state and switching losses, a number of fine pattern and Narrow Mesa IGBT cell architectures with sub-m trench and mesa dimensions have recently been proposed. In many industrial sectors nowadays, IGBT is one of the power semiconductors that is most frequently employed. New IGBT models are proposed to fulfil the requirements of a product and maintain the state of the art because different types of applications always have distinct product requirements. This study highlights some of the most important features of the IGBT with structures, one of the most prevalent instances, as well as working principles of IGBT based on structure and circuit.",
    absbox: "absPopup3",
  },

  {
    title:
      "APPLICATIONS OF BJT IN CE AMPLIFIER",
    authors:
      "Avishek Bhattacharjee",
    conferences:
      "IEEE Solid State Circuit Society Kolkata Chapter Conference 2022",
    researchYr: 2022,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "Bhattacharjee, Avishek & Sarnakar, Susmita. (2022). APPLICATIONS OF BJT IN CE AMPLIFIER. 10.13140/RG.2.2.35858.53441.",
    },
    abstract:
      "One of the three fundamental single-stage bipolar-junction-transistor (BJT) amplifier topologies in electronics is the common-emitter amplifier, which is commonly applied as a voltage amplifier. Bipolar junction transistors, also referred to as BJTs, can function as an oscillator, filter, rectifier, amplifier, and switch. Here, we gracefully cover the CE amplifier section.",
    absbox: "absPopup4",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
