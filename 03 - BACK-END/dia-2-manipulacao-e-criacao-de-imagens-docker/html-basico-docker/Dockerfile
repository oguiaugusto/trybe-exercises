FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]