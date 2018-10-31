(ns riffle.examples)


(def meetngreet
  '{:next-id 41
    :pred-ids [25 29]
    :title "meet and greet"
    :context-ids [13]
    :stage-ids [6]
    :type-ids [0]
    :prev-id 38
    :interaction-style :cyoa
    :things {0  {:name "char", :term-ids [19 20 21], :id 0, :is :type, :parent-id nil}
             32 {:input-str "unmet $C2 $C1", :consume? true, :id 32, :is :premise, :parent-id 7}
             33 {:input-str "unmet juliet romeo", :id 33, :is :fact, :parent-id 13}
             34 {:input-str "unmet romeo mercutio", :id 34, :is :fact, :parent-id 13}
             35 {:input-str "unmet mercutio romeo", :id 35, :is :fact, :parent-id 13}
             36 {:input-str "unmet juliet mercutio", :id 36, :is :fact, :parent-id 13}
             37 {:input-str "unmet mercutio juliet", :id 37, :is :fact, :parent-id 13}
             6  {:name "main"
                 :selection :interactive
                 :rule-ids [7]
                 :qui-rule-ids [38]
                 :id 6
                 :is :stage
                 :parent-id nil}
             38 {:choice-text "end"
                 :description "The end."
                 :premise-ids []
                 :result-ids []
                 :goto-id nil
                 :id 38
                 :is :qui-rule
                 :parent-id 6}
             7  {:choice-text "$C1: introduce yourself to $C2"
                 :description "\"Hello, $C2. My name is $C1.\""
                 :premise-ids [8 32]
                 :result-ids [9 31]
                 :id 7
                 :is :rule
                 :parent-id 6}
             8  {:input-str "unmet $C1 $C2", :consume? true, :id 8, :is :premise, :parent-id 7}
             9  {:input-str "met $C1 $C2", :id 9, :is :result, :parent-id 7}
             13 {:name "init", :stage-id 6, :fact-ids [18 33 34 35 36 37], :id 13, :is :context, :parent-id nil}
             18 {:input-str "unmet romeo juliet", :id 18, :is :fact, :parent-id 13}
             19 {:input-str "romeo", :id 19, :is :term, :parent-id 0}
             20 {:input-str "juliet", :id 20, :is :term, :parent-id 0}
             21 {:input-str "mercutio", :id 21, :is :term, :parent-id 0}
             25 {:input-str "unmet char char", :id 25, :is :pred, :parent-id nil}
             29 {:input-str "met char char", :id 29, :is :pred, :parent-id nil}
             31 {:input-str "met $C2 $C1", :id 31, :is :result, :parent-id 7}}
    :bwd-ids []
    :context-id 13})


(def hello '{
:types
[{:name character
  :terms [max chris kate quinn]}
 {:name world
  :terms [earth mars moon]}
 ;; the "game" doesn't actually use these right now, they're just here for testing
 {:name nat :terms [[z] [s nat]]}
 {:name nat-option :terms [[some nat] [none]]}]

:preds
[[unmet character character]
 [met character character]
 [unseen character world]
 [seen character world]]

:bwds ; similarly just here for testing at the moment
[{:sig [plus nat nat nat]
  :cases [[plus z $N $N]
          {:pattern [plus [s $N] $M [s $Sum]]
           :goals   [[plus $N $M $Sum]]}]}]

:facts
[[unmet max chris] [unmet max kate] [unmet max quinn]
 [unmet chris max] [unmet chris kate] [unmet chris quinn]
 [unmet kate max] [unmet kate chris] [unmet kate quinn]
 [unmet quinn max] [unmet quinn chris] [unmet quinn kate]
 [seen max earth] [unseen max mars] [unseen max moon]
 [unseen chris earth] [unseen chris mars] [seen chris moon]
 [unseen kate earth] [seen kate mars] [unseen kate moon]
 [seen quinn earth] [unseen quinn mars] [seen quinn moon]]

:stages
[{:name main
  :selection :interactive
  :rules
  [{:name meet
    :consume [[unmet $C1 $C2] [unmet $C2 $C1]]
    :check   []
    :results [[met $C1 $C2] [met $C2 $C1]]}
   {:name see
    :consume [[unseen $C $World]]
    :check   []
    :results [[seen $C $World]]}]}]

:stage main
})


(def romeo '{
:types
[{:name character
  :terms [romeo juliet montague capulet mercutio nurse tybalt apothecary]}
 {:name location
  :terms [town mon-house cap-house]}
 {:name object
  :terms [weapon]}]

:preds
[;; cold hard facts
 [at character location]
 [has character object]
 [wants character object]
 [dead character]
 ;; relationships between characters
 [murdered character character]
 [anger character character]
 [eros character character]
 [philia character character]
 [married character character]
 [unmarried character]
 [neutral character character]
 ;; emotions
 [depressed character]
 [suicidal character]
 [boredom]
 ;; bookkeeping
 [nonfinal]
 [final]]

:bwds
[{:sig [accessible location location]
  :cases [[accessible mon-house town]
          [accessible town mon-house]
          [accessible cap-house town]
          [accessible town cap-house]]}]

:facts
[;; where is everyone?
 [at romeo town] [at montague mon-house] [at capulet cap-house]
 [at mercutio town] [at nurse cap-house] [at juliet town]
 [at tybalt town] [at apothecary town]
 ;; who is unmarried?
 [unmarried romeo] [unmarried juliet]
 [unmarried nurse] [unmarried mercutio] [unmarried tybalt]
 [unmarried apothecary]
 ;; who is angry at who?
 [anger montague capulet] [anger capulet montague]
 [anger tybalt romeo] [anger capulet romeo] [anger montague tybalt]
 ;; who is friendly with who?
 [philia mercutio romeo] [philia romeo mercutio]
 [philia montague romeo] [philia capulet juliet]
 ;; who has weapons?
 [has tybalt weapon] [has romeo weapon] [has apothecary weapon]
 ;; more relationships, mostly neutral
 [philia juliet nurse] [philia nurse juliet]
 [neutral nurse romeo]
 [neutral mercutio juliet] [neutral juliet mercutio]
 [neutral apothecary nurse] [neutral nurse apothecary]
 ;; bookkeeping
 [nonfinal]]

:stages
[{:name all
  :selection :interactive
  :rules
  [] ; TODO port from https://github.com/chrisamaphone/interactive-lp/blob/master/examples/tragedy.cep
  :quiescence-rules
  []}]

:stage all
})
