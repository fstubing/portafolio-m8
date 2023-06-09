PGDMP     
    $                {            portafolio_m8    15.1    15.1 7    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    65832    portafolio_m8    DATABASE     �   CREATE DATABASE portafolio_m8 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE portafolio_m8;
                postgres    false            �            1259    65833    Carros    TABLE     �   CREATE TABLE public."Carros" (
    id integer NOT NULL,
    "idUsuario" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Carros";
       public         heap    postgres    false            �            1259    65836    Carros_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Carros_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Carros_id_seq";
       public          postgres    false    218            B           0    0    Carros_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Carros_id_seq" OWNED BY public."Carros".id;
          public          postgres    false    219            �            1259    65837    DetalleCarros    TABLE     	  CREATE TABLE public."DetalleCarros" (
    id integer NOT NULL,
    "idCarro" integer NOT NULL,
    "idProducto" integer NOT NULL,
    cantidad integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public."DetalleCarros";
       public         heap    postgres    false            �            1259    65840    DetalleCarros_id_seq    SEQUENCE     �   CREATE SEQUENCE public."DetalleCarros_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."DetalleCarros_id_seq";
       public          postgres    false    220            C           0    0    DetalleCarros_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."DetalleCarros_id_seq" OWNED BY public."DetalleCarros".id;
          public          postgres    false    221            �            1259    65841 	   Productos    TABLE     �  CREATE TABLE public."Productos" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    marca character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    stock integer NOT NULL,
    precio integer NOT NULL,
    imagen1 character varying(255) NOT NULL,
    imagen2 character varying(255) NOT NULL,
    imagen3 character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Productos";
       public         heap    postgres    false            �            1259    65846    Productos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Productos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Productos_id_seq";
       public          postgres    false    222            D           0    0    Productos_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Productos_id_seq" OWNED BY public."Productos".id;
          public          postgres    false    223            �            1259    65847    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    65850    Usuarios    TABLE     �  CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    clase character varying(10) DEFAULT 'comprador'::character varying
);
    DROP TABLE public."Usuarios";
       public         heap    postgres    false            �            1259    65855    Usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Usuarios_id_seq";
       public          postgres    false    225            E           0    0    Usuarios_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;
          public          postgres    false    226            �            1259    65856    Venta    TABLE     $  CREATE TABLE public."Venta" (
    id integer NOT NULL,
    "idUsuario" integer NOT NULL,
    subtotal integer NOT NULL,
    descuento integer NOT NULL,
    "precioTotal" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Venta";
       public         heap    postgres    false            �            1259    65859    Venta_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Venta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Venta_id_seq";
       public          postgres    false    227            F           0    0    Venta_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Venta_id_seq" OWNED BY public."Venta".id;
          public          postgres    false    228            �            1259    65860    detalleVenta    TABLE       CREATE TABLE public."detalleVenta" (
    id integer NOT NULL,
    "idVenta" integer,
    "idProducto" integer,
    cantidad integer NOT NULL,
    "precioUnitario" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public."detalleVenta";
       public         heap    postgres    false            �            1259    65863    detalleVenta_id_seq    SEQUENCE     �   CREATE SEQUENCE public."detalleVenta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."detalleVenta_id_seq";
       public          postgres    false    229            G           0    0    detalleVenta_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."detalleVenta_id_seq" OWNED BY public."detalleVenta".id;
          public          postgres    false    230            �           2604    65864 	   Carros id    DEFAULT     j   ALTER TABLE ONLY public."Carros" ALTER COLUMN id SET DEFAULT nextval('public."Carros_id_seq"'::regclass);
 :   ALTER TABLE public."Carros" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    65865    DetalleCarros id    DEFAULT     x   ALTER TABLE ONLY public."DetalleCarros" ALTER COLUMN id SET DEFAULT nextval('public."DetalleCarros_id_seq"'::regclass);
 A   ALTER TABLE public."DetalleCarros" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            �           2604    65866    Productos id    DEFAULT     p   ALTER TABLE ONLY public."Productos" ALTER COLUMN id SET DEFAULT nextval('public."Productos_id_seq"'::regclass);
 =   ALTER TABLE public."Productos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    65867    Usuarios id    DEFAULT     n   ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);
 <   ALTER TABLE public."Usuarios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    65868    Venta id    DEFAULT     h   ALTER TABLE ONLY public."Venta" ALTER COLUMN id SET DEFAULT nextval('public."Venta_id_seq"'::regclass);
 9   ALTER TABLE public."Venta" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            �           2604    65869    detalleVenta id    DEFAULT     v   ALTER TABLE ONLY public."detalleVenta" ALTER COLUMN id SET DEFAULT nextval('public."detalleVenta_id_seq"'::regclass);
 @   ALTER TABLE public."detalleVenta" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229            /          0    65833    Carros 
   TABLE DATA           M   COPY public."Carros" (id, "idUsuario", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   FC       1          0    65837    DetalleCarros 
   TABLE DATA           j   COPY public."DetalleCarros" (id, "idCarro", "idProducto", cantidad, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   cC       3          0    65841 	   Productos 
   TABLE DATA           �   COPY public."Productos" (id, nombre, marca, descripcion, stock, precio, imagen1, imagen2, imagen3, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �C       5          0    65847    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    224   �H       6          0    65850    Usuarios 
   TABLE DATA           l   COPY public."Usuarios" (id, nombre, apellido, email, password, "createdAt", "updatedAt", clase) FROM stdin;
    public          postgres    false    225   TI       8          0    65856    Venta 
   TABLE DATA           p   COPY public."Venta" (id, "idUsuario", subtotal, descuento, "precioTotal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   K       :          0    65860    detalleVenta 
   TABLE DATA           {   COPY public."detalleVenta" (id, "idVenta", "idProducto", cantidad, "precioUnitario", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   �K       H           0    0    Carros_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Carros_id_seq"', 15, true);
          public          postgres    false    219            I           0    0    DetalleCarros_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."DetalleCarros_id_seq"', 47, true);
          public          postgres    false    221            J           0    0    Productos_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Productos_id_seq"', 13, true);
          public          postgres    false    223            K           0    0    Usuarios_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Usuarios_id_seq"', 11, true);
          public          postgres    false    226            L           0    0    Venta_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Venta_id_seq"', 8, true);
          public          postgres    false    228            M           0    0    detalleVenta_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."detalleVenta_id_seq"', 16, true);
          public          postgres    false    230            �           2606    65871    Carros Carros_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Carros"
    ADD CONSTRAINT "Carros_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Carros" DROP CONSTRAINT "Carros_pkey";
       public            postgres    false    218            �           2606    65873     DetalleCarros DetalleCarros_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."DetalleCarros"
    ADD CONSTRAINT "DetalleCarros_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."DetalleCarros" DROP CONSTRAINT "DetalleCarros_pkey";
       public            postgres    false    220            �           2606    65875    Productos Productos_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Productos"
    ADD CONSTRAINT "Productos_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Productos" DROP CONSTRAINT "Productos_pkey";
       public            postgres    false    222            �           2606    65877     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    224            �           2606    65879    Usuarios Usuarios_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Usuarios" DROP CONSTRAINT "Usuarios_pkey";
       public            postgres    false    225            �           2606    65881    Venta Venta_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Venta"
    ADD CONSTRAINT "Venta_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Venta" DROP CONSTRAINT "Venta_pkey";
       public            postgres    false    227            �           2606    65883    detalleVenta detalleVenta_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."detalleVenta"
    ADD CONSTRAINT "detalleVenta_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."detalleVenta" DROP CONSTRAINT "detalleVenta_pkey";
       public            postgres    false    229            �           2606    65884    Carros Carros_idUsuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Carros"
    ADD CONSTRAINT "Carros_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES public."Usuarios"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."Carros" DROP CONSTRAINT "Carros_idUsuario_fkey";
       public          postgres    false    225    218    3222            �           2606    65889 (   DetalleCarros DetalleCarros_idCarro_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."DetalleCarros"
    ADD CONSTRAINT "DetalleCarros_idCarro_fkey" FOREIGN KEY ("idCarro") REFERENCES public."Carros"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY public."DetalleCarros" DROP CONSTRAINT "DetalleCarros_idCarro_fkey";
       public          postgres    false    3214    218    220            �           2606    65894 +   DetalleCarros DetalleCarros_idProducto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."DetalleCarros"
    ADD CONSTRAINT "DetalleCarros_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES public."Productos"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public."DetalleCarros" DROP CONSTRAINT "DetalleCarros_idProducto_fkey";
       public          postgres    false    3218    220    222            �           2606    65899    Venta Venta_idUsuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Venta"
    ADD CONSTRAINT "Venta_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES public."Usuarios"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public."Venta" DROP CONSTRAINT "Venta_idUsuario_fkey";
       public          postgres    false    227    225    3222            �           2606    65904 )   detalleVenta detalleVenta_idProducto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."detalleVenta"
    ADD CONSTRAINT "detalleVenta_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES public."Productos"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public."detalleVenta" DROP CONSTRAINT "detalleVenta_idProducto_fkey";
       public          postgres    false    229    222    3218            �           2606    65909 &   detalleVenta detalleVenta_idVenta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."detalleVenta"
    ADD CONSTRAINT "detalleVenta_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES public."Venta"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."detalleVenta" DROP CONSTRAINT "detalleVenta_idVenta_fkey";
       public          postgres    false    227    3224    229            /      x������ � �      1      x������ � �      3   O  x��V�n�F}��b?�by��7ZR6�A�� ( �ȕ�o�%U;��>(�����zv)�R�I�Ύ�3g朑m��/gs���
��x2�7��!�5ˊ�ܗƛR%II�|�Ț>���0$i��Ju[e��9+j��i�DIxQ��n2F<׺ �����k���TP"�VФ��#.�.����'5��S�jѦqx�)��񞝠ii�ox��?�F%�Fn�m�kO���q���u|b��8}3�m���z�r�?���먫N`�˫h4_�E���"~�>"�Oޑ��'��h�R�HM�E~�H���L��QP�ةr�H����tu[gns^�}W�����mz���3��Wdz=���Ws�XΉӷ�tjDE��
�-�I�d5od)u�&�T��e�b�������Ί����3^�m#��uDqw��`_f{�J�O9��d�(�\�~�a#/�gY�#���h�6eB�����A۶,�w������z���ځ�����s�s��/v^�������A�S�?�i4�p �7��]�x����ռ��Q���2e�~*��|��0�*��Kj;�S4k�J�u7<c��2�Z �lH~x��yI
�g�7��,%�"��5�[5��#Ku�`��#{3���M1�Ұ{���t�k�|��伞���2/��_\zֻ�Zǳ��2�/׋x<ZF�A��(�]#�F+E�HM��*�Ϣ	� ��"�CL`�FUPIhN�.	�P5N�_lBU�B��0��)�X%ʄI=�xL�$yFA������/З�����;H���JH�zj�φު��!9���5�v[Q{J֬����9?����`�v8�|\y
M�1��E<���\�g�1�F��X��i<��$<_CVi*މ�HNL�[��`i����^�����_;jY{pN_�W@� ���fx�Y��2��=R�����
���>+ ��ܾ&�,�IBt�"l����b}.���]�\g���*S�3.��h�st���s���+b��:{z�n�0���kIi�Va�0���E��wK7�'TՋ�|lf��Y�H
�M���E2o�������fõ:��(��'�zߤQ`Wo�[&�&ȃ���SR�h|��lb�t���h-���W�9�N��XD�����z�o{sd+Z N�f��d�]hDuK �{�H�	-�'Np0/0��"x�넋��"ԩ+����c��-��{���\j���߸dlK���^0���6ɈKv�&t*�y����<;�W!�72�����Ԧ�jN�{$QX0t�3�����W�jxzS�����u�G�6u�.mm�?�~�x���Ǵ�j-����t�=_H      5   e   x�m��
� л����f�K�E=��j����<��V[@m���#�([i�GVg0��[7��|�j�]<�4�=�RJ�lG<1�#�qs��v%�x\==�      6   �  x�}�ٮ�@������[{zC�+u�ˈ��fnZ`����s��2gqƜ�T�*�WR��e %�0��e�q���A�E�tɹ�Q�$����{��7�^�>��zm��1��M��au�^c�Z7y�r}���!�ô��M��#H�ն�I�L���L0	[�,���Vg�E��z+7K	��D����s�˿OJ�A�
�t���Np2�UKgi����fQ�7���X�}����;�nU�A�˲�1���?w����9��
U�lg7�i-�b5��B��a<G�Ԥns���?.�6��d�/����\x"y8�l�����M1�L�XA{D�`ݦm`����D�A*2cp�^c0�IFܢ[�X^�/Ulȱ��q]��5�iZ��Q%��s��RO~�m�]Զb\� �=�6�6�	��n�'�4�Ϧ��      8   {   x�}��1D�PEX�1�Z��~�>�ӈ�<	��Lc�~�R�����E5�'{Q�����.҈�\O�
�9:-J�M�4`��[�Ms��#IK'�]+B���~��0�G�x$
���� �7h      :   �   x�u��� D��] ��f��s��J�p�㝞|�r���%-jG��*:�M�ܔ?{"��V����%�tRS�bA�L��g��� �l
���	H�\e�	�Ę��5+��H��3v�����S�\��dL�G�x��"A��)Ѻ�(�N�C�F�r�ǣ�I}�Y����| �iqJ     