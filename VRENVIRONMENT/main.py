import streamlit as st
st.image('nissan.jpg',width=150)
st.title("Home")
about_me=st.Page(
    page='views\\about.py',
    title='About us',
    icon=':material/home:',
    default=True
)
contact_me=st.Page(
    page='views\\contact.py',
    title='Contact us',
    icon=':material/home:',
)
service_me=st.Page(
    page='views\\services.py',
    title='Service',
    icon=':material/home:',
)
pg=st.navigation(pages=[about_me,contact_me,service_me])
# st.logo('apply')
pg.run()