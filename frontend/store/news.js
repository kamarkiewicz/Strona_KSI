export const state = () => ({
  entries: [
    {
      id: 1,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=1008',
      link: '#read-more-link'
    },
    {
      id: 2,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=1018',
      link: '#read-more-link'
    },
    {
      id: 3,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=918',
      link: '#read-more-link'
    },
    {
      id: 4,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=1008',
      link: '#read-more-link'
    },
    {
      id: 5,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=1018',
      link: '#read-more-link'
    },
    {
      id: 6,
      date: '2018-11-28',
      title: 'The Gettogether',
      excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
      image: 'https://picsum.photos/505/295?image=918',
      link: '#read-more-link'
    },
  ]
})

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
