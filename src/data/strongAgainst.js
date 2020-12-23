// key is strong against items in array

const data={
    Fire:['Grass','Ice','Bug','Steel'],
    Water:['Fire','Rock','Ground'],
    Grass:['Water','Rock','Ground'],
    Dragon:['Dragon'],
    Electric:['Water','Flying'],
    Bug:['Grass','Psychic','Dark'],
    Rock:['Fire','Bug','Ice','Flying'],
    Poison:['Grass','Fairy'],
    Ground:['Fire','Electric','Poison','Rock','Steel'],
    Flying:['Grass','Fighting','Bug'],
    Normal:[],
    Ice:['Dragon','Ice','Ground','Flying'],
    Fighting:['Normal','Ice','Rock','Dark','Steel'],
    Psychic:['Fighting','Poison'],
    Ghost:['Psychic','Ghost'],
    Dark:['Psychic','Ghost'],
    Steel:['Ice','Rock','Fairy'],
    Fairy:['Fighting','Dragon','Dark']
}
export default data