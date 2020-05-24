import { Place } from './place';

export class PlaceMap {
    
    map = new Map<string, Place>();

    initializeData() {
        var p1 = new Place();
        p1.setName("Portão Sul");
        p1.setLat(-21.78156);
        p1.setLong(-43.36706);
        this.map.set("PortaoSul", p1);

        var p2 = new Place();
        p2.setName("Restaurante Universitário");
        p2.setLat(-21.77789);
        p2.setLong(-43.37293)
        this.map.set("RestauranteUniversitario", p2);

        var p3 = new Place();
        p3.setName("CBR");
        p3.setLat(-21.77961);
        p3.setLong(-43.37247);
        this.map.set("CBR", p3);

        var p4 = new Place();
        p4.setName("CGCO");
        p4.setLat(-21.77612);
        p4.setLong(-43.37142);
        this.map.set("CGCO", p4);

        var p5 = new Place();
        p5.setName("CRITT");
        p5.setLat(-21.77937);
        p5.setLong(-43.37537);
        this.map.set("CRITT", p5);

        var p6 = new Place();
        p6.setName("Faculdade de Administracão e Ciências Contábeis");
        p6.setLat(-21.77510);
        p6.setLong(-43.36641);
        this.map.set("FaculdadeDeAdministracaoECienciasContabeis", p6);

        var p7 = new Place();
        p7.setName("Faculdade de Arquitetura");
        p7.setLat(-21.77747);
        p7.setLong(-43.37329);
        this.map.set("FaculdadeDeArquitetura", p7);

        var p8 = new Place();
        p8.setName("Faculdade de Comunicacao");
        p8.setLat(-21.77659);
        p8.setLong(-43.36538);
        this.map.set("FaculdadeDeComunicacao", p8);

        var p9 = new Place();
        p9.setName("Faculdade de Direito");
        p9.setLat(-21.77379);
        p9.setLong(-43.36715);
        this.map.set("FaculdadeDeDireito", p9);

        var p10 = new Place();
        p10.setName("Faculdade de Economia");
        p10.setLat(-21.77560);
        p10.setLong(-43.36413);
        this.map.set("FaculdadeDeEconomia", p10);

        var p11 = new Place();
        p11.setName("Faculdade de Educação");
        p11.setLat(-21.77539);
        p11.setLong(-43.36617);
        this.map.set("FaculdadeDeEducacao", p11);

        var p12 = new Place();
        p12.setName("Faculdade de Educação Física e Desportos");
        p12.setLat(-21.78145);
        p12.setLong(-43.37266);
        this.map.set("FaculdadeDeEducacaoFisicaEDesportos", p11);

        var p13 = new Place();
        p13.setName("Faculdade de Engenharia");
        p13.setLat(-21.77879);
        p13.setLong(-43.37351);
        this.map.set("FaculdadeDeEngenharia", p13);

        var p14 = new Place();
        p14.setName("Faculdade de Letras");
        p14.setLat(-21.77455);
        p14.setLong(-43.37067);
        this.map.set("FaculdadeDeLetras", p14);

        var p15 = new Place();
        p15.setName("Instituto de Artes e Design");
        p15.setLat(-21.77890);
        p15.setLong(-43.37435);
        this.map.set("InstitutoDeArtesEDesign", p15);

        var p16 = new Place();
        p16.setName("Instituto de Ciências Biológicas");
        p16.setLat(-21.77594);
        p16.setLong(-43.37090);
        this.map.set("InstitutoDeCienciasBiologicas", p16);

        var p17 = new Place();
        p17.setName("Instituto de Ciências da Saúde");
        p17.setLat(-21.77670);
        p17.setLong(-43.36702);
        this.map.set("InstitutoDeCienciasDaSaude", p17);

        var p18 = new Place();
        p18.setName("Instituto de Ciências Exatas");
        p18.setLat(-21.77535);
        p18.setLong(-43.37172);
        this.map.set("InstitutoDeCienciasExatas", p18);

        var p19 = new Place();
        p19.setName("Instituto de Ciências Exatas Antigo");
        p19.setLat(-21.77662);
        p19.setLong(-43.37181);
        this.map.set("InstitutoDeCienciasExatasAntigo", p19);

        var p20 = new Place();
        p20.setName("Instituto de Ciências Humanas");
        p20.setLat(-21.77358);
        p20.setLong(-43.36601);
        this.map.set("InstitutoDeCienciasHumanas", p20);

        var p21 = new Place();
        p21.setName("Portão Norte");
        p21.setLat(-21.77300);
        p21.setLong(-43.37054);
        this.map.set("PortaoNorte", p21);

        var p22 = new Place();
        p22.setName("Pró-Reitoria de Infraestrutura");
        p22.setLat(-21.77310);
        p22.setLong(-43.36987);
        this.map.set("ProReitoriaDeInfraestrutura", p22);

        var p23 = new Place();
        p23.setName("Reitoria");
        p23.setLat(-21.77426);
        p23.setLong(-43.36872);
        this.map.set("Reitoria", p23);
    }

    getValue(name: string) {
        this.initializeData();
        return this.map.get(name).name;
    }

    getValueAndInfo(name: string) {
        this.initializeData();
        return this.map.get(name);
    }

}