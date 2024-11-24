const QuestionData = [
    {
      question: "What is the atomic number of oxygen?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },
    {
      question: "Which element is known as the 'King of Chemicals'?",
      options: ["Sulfur", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Sulfur"
    },
    {
      question: "What is the pH of a neutral solution at 25°C?",
      options: ["0", "7", "14", "10"],
      answer: "7"
    },
    {
      question: "Which gas is commonly known as laughing gas?",
      options: ["Nitrogen dioxide", "Nitrous oxide", "Ammonia", "Carbon monoxide"],
      answer: "Nitrous oxide"
    },
    {
      question: "What type of bond is formed when electrons are shared between atoms?",
      options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
      answer: "Covalent bond"
    },
    {
      question: "Which is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      answer: "Nitrogen"
    },
    {
      question: "What is the molar mass of water (H₂O)?",
      options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
      answer: "18 g/mol"
    },
    {
      question: "What is the chemical formula of ammonia?",
      options: ["NH₄", "NH₃", "N₂H₄", "N₂H₆"],
      answer: "NH₃"
    },
    {
      question: "What is the main component of natural gas?",
      options: ["Propane", "Ethane", "Methane", "Butane"],
      answer: "Methane"
    },
    {
      question: "Which acid is commonly found in vinegar?",
      options: ["Sulfuric acid", "Acetic acid", "Hydrochloric acid", "Nitric acid"],
      answer: "Acetic acid"
    },
    // {
    //   question: "What is the oxidation state of sulfur in H₂SO₄?",
    //   options: ["+4", "+6", "-2", "+2"],
    //   answer: "+6"
    // },
    // {
    //   question: "What is the term for a reaction that absorbs heat?",
    //   options: ["Exothermic", "Endothermic", "Isothermal", "Adiabatic"],
    //   answer: "Endothermic"
    // },
    // {
    //   question: "Which element has the highest electronegativity?",
    //   options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    //   answer: "Fluorine"
    // },
    // {
    //   question: "What is the common name of NaCl?",
    //   options: ["Baking soda", "Table salt", "Bleaching powder", "Caustic soda"],
    //   answer: "Table salt"
    // },
    // {
    //   question: "What is the periodic table arrangement based on?",
    //   options: ["Atomic weight", "Atomic number", "Number of neutrons", "Chemical reactivity"],
    //   answer: "Atomic number"
    // },
    // {
    //   question: "What type of reaction is 2H₂ + O₂ → 2H₂O?",
    //   options: ["Decomposition", "Combustion", "Synthesis", "Displacement"],
    //   answer: "Synthesis"
    // },
    // {
    //   question: "Which gas turns limewater milky?",
    //   options: ["Carbon dioxide", "Ammonia", "Oxygen", "Nitrogen"],
    //   answer: "Carbon dioxide"
    // },
    // {
    //   question: "What is the chemical symbol for gold?",
    //   options: ["Au", "Ag", "Pb", "Pt"],
    //   answer: "Au"
    // },
    // {
    //   question: "Which acid is known as the 'King of Acids'?",
    //   options: ["Hydrochloric acid", "Nitric acid", "Sulfuric acid", "Phosphoric acid"],
    //   answer: "Sulfuric acid"
    // },
    // {
    //   question: "What is the common name of calcium carbonate?",
    //   options: ["Chalk", "Salt", "Baking powder", "Gypsum"],
    //   answer: "Chalk"
    // },
    // {
    //   question: "What is the process of solid changing directly into gas called?",
    //   options: ["Evaporation", "Sublimation", "Condensation", "Melting"],
    //   answer: "Sublimation"
    // },
    // {
    //   question: "What is the pH range of acids?",
    //   options: ["0-7", "7-14", "4-9", "8-14"],
    //   answer: "0-7"
    // },
    // {
    //   question: "Which of the following is a strong base?",
    //   options: ["HCl", "NaOH", "CH₃COOH", "NH₄OH"],
    //   answer: "NaOH"
    // },
    // {
    //   question: "What is the main ore of aluminum?",
    //   options: ["Hematite", "Bauxite", "Calamine", "Cinnabar"],
    //   answer: "Bauxite"
    // },
    // {
    //   question: "What is the product of the reaction between acid and base?",
    //   options: ["Salt", "Acid", "Base", "Water"],
    //   answer: "Salt"
    // },
    // {
    //   question: "Which gas is evolved during photosynthesis?",
    //   options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    //   answer: "Oxygen"
    // },
    // {
    //   question: "What is the pH value of pure water?",
    //   options: ["6", "7", "8", "9"],
    //   answer: "7"
    // },
    // {
    //   question: "What is the chemical formula for common table sugar?",
    //   options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₁₂H₂₄O₁₂", "C₆H₆"],
    //   answer: "C₁₂H₂₂O₁₁"
    // },
    // {
    //   question: "What is the lightest element in the periodic table?",
    //   options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
    //   answer: "Hydrogen"
    // },
    // {
    //   question: "Which element is a liquid at room temperature?",
    //   options: ["Mercury", "Copper", "Aluminum", "Iron"],
    //   answer: "Mercury"
    // },
    // {
    //   question: "Which type of chemical bond is the strongest?",
    //   options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Van der Waals bond"],
    //   answer: "Covalent bond"
    // },
    // {
    //   question: "What is the term for the minimum energy required to start a chemical reaction?",
    //   options: ["Activation energy", "Bond energy", "Potential energy", "Kinetic energy"],
    //   answer: "Activation energy"
    // },
    // {
    //   question: "What is the main component of rust?",
    //   options: ["Iron sulfate", "Iron oxide", "Iron chloride", "Iron carbonate"],
    //   answer: "Iron oxide"
    // },
    // {
    //   question: "What is the chemical formula of ethanol?",
    //   options: ["C₂H₆", "C₂H₅OH", "C₂H₄O₂", "C₆H₆"],
    //   answer: "C₂H₅OH"
    // },
    // {
    //   question: "What is the percentage of nitrogen in the Earth's atmosphere?",
    //   options: ["21%", "78%", "1%", "0.03%"],
    //   answer: "78%"
    // },
    // {
    //   question: "What is the process of separating a mixture into its components called?",
    //   options: ["Filtration", "Distillation", "Centrifugation", "All of the above"],
    //   answer: "All of the above"
    // },
    // {
    //   question: "Which metal reacts vigorously with water to produce hydrogen gas?",
    //   options: ["Iron", "Copper", "Sodium", "Gold"],
    //   answer: "Sodium"
    // },
    // {
    //   question: "What is the molecular formula for ozone?",
    //   options: ["O₂", "O₃", "O₄", "O"],
    //   answer: "O₃"
    // }
  ];
  
  
export default QuestionData;