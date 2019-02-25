import { Component } from '@angular/core';
import Post from './types/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  posts = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper euismod consectetur. In hac habitasse platea dictumst. Nullam faucibus cursus eleifend. Cras ut eleifend tortor, id dignissim eros. Fusce tellus felis, scelerisque non quam sed, bibendum sollicitudin nunc. Proin non turpis nec lacus bibendum imperdiet quis id ex. Proin at lacinia lectus. Donec dapibus hendrerit elit id finibus. Nam eu nisl lacinia, euismod sapien in, euismod ex. Cras placerat pulvinar vestibulum. Nunc ligula arcu, aliquam dignissim lectus porttitor, maximus imperdiet massa. Pellentesque nibh massa, maximus sit amet placerat vitae, pulvinar eget arcu. Maecenas vel sodales elit, quis tincidunt enim. Cras id metus quis velit convallis ultrices. Duis maximus, mi et feugiat lobortis, dui dui pulvinar augue, a mattis neque erat ut dolor. Suspendisse tempor mattis quam.'),
    new Post('Mon deuxième post', 'Nunc orci est, vehicula nec porta nec, placerat sit amet risus. Suspendisse fermentum rutrum tristique. Aenean ultrices at augue et mollis. Cras sed vestibulum sem. Maecenas commodo mauris quis augue cursus, non sodales eros faucibus. Aenean commodo euismod dignissim. Morbi hendrerit malesuada ex, et ultrices augue consectetur ac. Morbi euismod est nec congue porta. Nunc ut pellentesque orci, eget aliquam magna. Curabitur sodales euismod quam, quis pharetra ex egestas ut. Vestibulum condimentum leo ut leo imperdiet, eget ornare nisl posuere. Etiam semper vestibulum orci eget egestas.'),
    new Post('Encore un post', 'Donec rhoncus ligula vitae diam pretium lacinia. Aliquam dignissim iaculis quam, sed pretium magna tristique in. Donec tempus elit eu ultricies pulvinar. Ut tempus felis lacus, nec porta turpis posuere eu. Etiam sollicitudin purus id risus pretium cursus. Sed dapibus velit laoreet ultrices interdum. Praesent mollis viverra orci, vitae fermentum massa malesuada ut. Nam ligula turpis, placerat eget diam vel, finibus mollis nulla. Curabitur urna orci, ullamcorper at imperdiet vitae, iaculis ac ligula. Vestibulum tincidunt nisl urna.')
  ];
}
