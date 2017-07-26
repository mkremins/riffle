(ns riffle.examples)


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
