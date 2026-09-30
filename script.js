const serviceOptions = [
  { value: "adult", label: "For me", detail: "Adult counselling" },
  { value: "couples", label: "For my relationship", detail: "Couples counselling" },
  { value: "child", label: "For my child (ages 5–13)", detail: "Counselling for children" },
  { value: "teen", label: "For my teen (ages 14–17)", detail: "Counselling for teens and youth" },
  { value: "caregiver", label: "For me as a parent or caregiver", detail: "Parent and caregiver support" },
];

const concernOptions = {
  adult: [
    { value: "anxious", label: "I’ve been feeling anxious or overwhelmed", detail: "Worry, overthinking, stress, or feeling like it’s all becoming too much", result: "feeling anxious or overwhelmed" },
    { value: "emotions", label: "My emotions have been hard to manage", detail: "Anger, big reactions, shutting down, or feeling easily triggered", result: "emotions that have been hard to manage" },
    { value: "past", label: "Something from the past is still affecting me", detail: "Trauma, difficult experiences, or patterns that keep showing up", result: "something from the past that is still affecting you" },
    { value: "relationship", label: "I’m struggling in a relationship", detail: "Communication, conflict, trust, boundaries, or feeling disconnected", result: "a relationship that has been difficult" },
    { value: "transition", label: "I’m going through something difficult", detail: "Grief, loss, family changes, school, work, or another life transition", result: "a difficult experience or life transition" },
    { value: "child-teen", label: "I’m worried about my child or teen", detail: "Anxiety, big emotions, behaviour, school, friendships, or changes at home", result: "worry about your child or teen" },
    { value: "unsure", label: "I’m not completely sure", detail: "I just know something hasn’t been feeling right", result: "the sense that something hasn’t been feeling right" },
  ],
  couples: [
    { value: "communication", label: "Communication", detail: "It feels hard to say what we mean and feel heard", result: "communication in your relationship" },
    { value: "arguments", label: "Repeating arguments", detail: "We keep getting pulled into the same conflict", result: "arguments that keep repeating" },
    { value: "trust", label: "Trust", detail: "Something has made it harder to feel secure together", result: "trust in your relationship" },
    { value: "boundaries", label: "Boundaries", detail: "We need clearer expectations and limits", result: "boundaries in your relationship" },
    { value: "disconnected", label: "Feeling disconnected", detail: "We care about each other but don’t feel like a team", result: "feeling disconnected from each other" },
    { value: "changes", label: "Major changes", detail: "We’re adjusting to a new season or difficult transition", result: "a major change in your relationship" },
    { value: "unsure", label: "I’m not completely sure", detail: "We just know something needs to feel different", result: "the sense that something needs to feel different" },
  ],
  child: [
    { value: "worries", label: "Anxiety & worries", detail: "Frequent worries, fears, or needing lots of reassurance", result: "your child’s anxiety or worries" },
    { value: "big-emotions", label: "Big emotions", detail: "Feelings that quickly become hard to manage", result: "your child’s big emotions" },
    { value: "anger", label: "Anger & frustration", detail: "Outbursts, irritability, or becoming upset easily", result: "your child’s anger or frustration" },
    { value: "behaviour", label: "Behaviour", detail: "Actions that may be showing you something is going on", result: "changes or concerns in your child’s behaviour" },
    { value: "school", label: "School", detail: "Learning, attention, attendance, or school-related stress", result: "something happening at school" },
    { value: "friendships", label: "Friendships", detail: "Making friends, conflict, rejection, or feeling left out", result: "your child’s friendships" },
    { value: "home", label: "Changes at home", detail: "Separation, loss, transitions, or changes in family life", result: "a change at home" },
    { value: "confidence", label: "Confidence & self-esteem", detail: "Self-doubt, comparison, or not feeling good enough", result: "your child’s confidence or self-esteem" },
    { value: "unsure", label: "I’m not completely sure", detail: "I just know my child hasn’t seemed like themselves", result: "the sense that your child hasn’t seemed like themselves" },
  ],
  teen: [
    { value: "worries", label: "Anxiety & worries", detail: "Worry, overthinking, stress, or feeling overwhelmed", result: "your teen’s anxiety or worries" },
    { value: "emotions", label: "Big emotions", detail: "Anger, shutting down, or reactions that feel hard to manage", result: "emotions that have been hard for your teen to manage" },
    { value: "school", label: "School stress", detail: "Pressure, motivation, attention, attendance, or performance", result: "school-related stress" },
    { value: "friendships", label: "Friendships", detail: "Conflict, rejection, fitting in, or feeling left out", result: "your teen’s friendships" },
    { value: "family", label: "Family", detail: "Communication, conflict, expectations, or changes at home", result: "something happening in the family" },
    { value: "relationships", label: "Relationships", detail: "Dating, boundaries, trust, or feeling disconnected", result: "a relationship that has been difficult" },
    { value: "confidence", label: "Confidence & self-esteem", detail: "Identity, comparison, self-doubt, or not feeling good enough", result: "your teen’s confidence or self-esteem" },
    { value: "unsure", label: "I’m not completely sure", detail: "I just know something hasn’t been feeling right", result: "the sense that something hasn’t been feeling right" },
  ],
  caregiver: [
    { value: "big-emotions", label: "My child’s big emotions", detail: "Feelings that quickly become hard for everyone to manage", result: "your child’s big emotions" },
    { value: "behaviour", label: "Behaviour", detail: "I want to understand what may be underneath it", result: "behaviour that has been difficult to understand" },
    { value: "anxiety", label: "Anxiety", detail: "Worries, fears, avoidance, or needing frequent reassurance", result: "your child’s anxiety" },
    { value: "communication", label: "Communication", detail: "We’re having a hard time talking and feeling heard", result: "communication with your child" },
    { value: "boundaries", label: "Boundaries", detail: "I need help setting limits and following through", result: "setting and holding boundaries" },
    { value: "parenting-stress", label: "Parenting stress", detail: "I feel overwhelmed, unsure, or worn down", result: "parenting stress" },
    { value: "needs", label: "Understanding what my child needs", detail: "I want to respond in a way that is actually helpful", result: "understanding what your child needs" },
    { value: "unsure", label: "I’m not completely sure", detail: "I know something needs to change but I’m not sure where to start", result: "not knowing where to start" },
  ],
};

const goalOptions = [
  { value: "understand", label: "I want to understand what’s going on", detail: "Make sense of my emotions, reactions, experiences, or patterns", result: "understand what’s going on" },
  { value: "respond", label: "I want to know what to do when it happens", detail: "Learn practical strategies I can actually use in the moment", result: "know what to do when it happens" },
  { value: "relationships", label: "I want things to feel better in my relationships", detail: "Communicate differently, set boundaries, repair, or reconnect", result: "make things feel better in your relationships" },
  { value: "support-child", label: "I want help supporting my child or teen", detail: "Understand what may be underneath the behaviour and how to respond", result: "support your child or teen differently" },
  { value: "carry", label: "I need somewhere to work through what I’m carrying", detail: "Talk openly about something difficult and figure out where to go from here", result: "work through what you’re carrying" },
  { value: "unsure", label: "I’m still figuring that out", detail: "I’d like some help understanding what I need", result: "understand what you need" },
];

const formatOptions = [
  { value: "virtual", label: "Virtual sessions", detail: "Meet securely from your own space", result: "Virtual" },
  { value: "person", label: "In-person sessions", detail: "Meet face to face", result: "In person" },
  { value: "either", label: "Either could work", detail: "I’m flexible about the format", result: "Either virtual or in person" },
  { value: "unsure", label: "I’m not sure yet", detail: "I’d like to talk it through", result: "Not sure yet" },
];

const questions = [
  { title: "Who is the support for?", help: "Choose the option that feels closest. You can always discuss the details on an intro call.", key: "service", options: () => serviceOptions },
  { title: "What’s been going on lately?", help: "Choose what feels closest. It doesn’t have to describe everything.", key: "concern", options: (answers) => concernOptions[answers.service] || concernOptions.adult },
  { title: "What would you like to be different?", help: "You don’t need a perfectly worded counselling goal. Just choose what sounds most like what you want.", key: "goal", options: () => goalOptions },
  { title: "How would you prefer to meet?", help: "Choose a starting preference. Availability can be discussed during the intro call.", key: "format", options: () => formatOptions },
];

const serviceLanguage = {
  adult: "yourself",
  couples: "your relationship",
  child: "your child",
  teen: "your teen",
  caregiver: "yourself as a parent or caregiver",
};

const explorer = document.querySelector("[data-fit-explorer]");

if (explorer) {
  const title = explorer.querySelector("#question-title");
  const help = explorer.querySelector("#question-help");
  const stepLabel = explorer.querySelector("#step-label");
  const optionsWrap = explorer.querySelector("[data-options]");
  const progress = explorer.querySelector("[data-progress]");
  const questionPanel = explorer.querySelector("[data-question-panel]");
  const resultPanel = explorer.querySelector("[data-result]");
  const resultTitle = explorer.querySelector("#result-title");
  const resultCopy = explorer.querySelector("[data-result-copy]");
  const resultNotes = explorer.querySelector("[data-result-notes]");
  const next = explorer.querySelector("[data-next]");
  const back = explorer.querySelector("[data-back]");
  const resets = explorer.querySelectorAll("[data-reset]");

  let step = 0;
  const answers = {};

  function currentOptions() {
    return questions[step].options(answers);
  }

  function selectedOption(stepIndex) {
    const question = questions[stepIndex];
    return question.options(answers).find((option) => option.value === answers[question.key]);
  }

  function renderQuestion({ focus = false } = {}) {
    const current = questions[step];
    const options = currentOptions();
    stepLabel.textContent = `Question ${step + 1} of ${questions.length}`;
    progress.style.width = `${((step + 1) / questions.length) * 100}%`;
    title.textContent = current.title;
    help.textContent = current.help;
    back.disabled = step === 0;
    next.textContent = step === questions.length - 1 ? "See my reflection" : "Continue";
    optionsWrap.replaceChildren();

    options.forEach((option) => {
      const button = document.createElement("button");
      const detail = document.createElement("small");
      button.type = "button";
      button.className = "option-button";
      button.dataset.value = option.value;
      button.setAttribute("aria-pressed", String(answers[current.key] === option.value));
      button.append(document.createTextNode(option.label));
      detail.textContent = option.detail;
      button.append(detail);
      button.addEventListener("click", () => {
        if (current.key === "service" && answers.service !== option.value) {
          delete answers.concern;
          delete answers.goal;
          delete answers.format;
        }
        answers[current.key] = option.value;
        optionsWrap.querySelectorAll(".option-button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        next.disabled = false;
      });
      optionsWrap.append(button);
    });

    next.disabled = !answers[current.key] || !options.some((option) => option.value === answers[current.key]);
    if (focus) title.focus();
  }

  function showResult() {
    questionPanel.hidden = true;
    resultPanel.hidden = false;
    stepLabel.textContent = "Your reflection";
    progress.style.width = "100%";
    explorer.querySelector(".explorer-topline [data-reset]").hidden = false;

    const concern = selectedOption(1);
    const goal = selectedOption(2);
    const format = selectedOption(3);
    const first = document.createElement("p");
    const second = document.createElement("p");
    first.textContent = `It sounds like you’re looking for support for ${serviceLanguage[answers.service]}, and one of the things weighing on you right now is ${concern.result}.`;
    second.textContent = `You’d like some help to ${goal.result}. That gives us somewhere to start. You don’t need to have the rest figured out before reaching out.`;
    resultCopy.replaceChildren(first, second);
    resultNotes.innerHTML = `<div class="result-note"><span aria-hidden="true">✓</span><div>Your session preference: ${format.result}</div></div>`;
    resultTitle.focus();
  }

  next.addEventListener("click", () => {
    if (!answers[questions[step].key]) return;
    if (step < questions.length - 1) {
      step += 1;
      renderQuestion({ focus: true });
    } else {
      showResult();
    }
  });

  back.addEventListener("click", () => {
    if (step > 0) {
      step -= 1;
      renderQuestion({ focus: true });
    }
  });

  resets.forEach((reset) => {
    reset.addEventListener("click", () => {
      Object.keys(answers).forEach((key) => delete answers[key]);
      step = 0;
      resultPanel.hidden = true;
      questionPanel.hidden = false;
      explorer.querySelector(".explorer-topline [data-reset]").hidden = true;
      renderQuestion({ focus: true });
    });
  });

  renderQuestion();
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach((item) => observer.observe(item));
}
